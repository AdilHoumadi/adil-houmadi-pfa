import { useEffect, useRef } from 'react';

interface DataPacket {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
  streamId: number;
}

interface StreamNode {
  x: number;
  y: number;
  type: 'producer' | 'broker' | 'consumer';
  pulsePhase: number;
  label: string;
}

interface StreamPath {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let packets: DataPacket[] = [];
    let nodes: StreamNode[] = [];
    let paths: StreamPath[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeTopology();
    };

    const colors = [
      'rgba(45, 212, 191, 0.8)',
      'rgba(34, 211, 238, 0.8)',
      'rgba(59, 130, 246, 0.8)',
      'rgba(168, 85, 247, 0.8)',
      'rgba(236, 72, 153, 0.8)',
    ];

    const initializeTopology = () => {
      nodes = [];
      paths = [];
      packets = [];

      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      nodes.push(
        { x: w * 0.15, y: centerY - 120, type: 'producer', pulsePhase: 0, label: 'Producer A' },
        { x: w * 0.15, y: centerY, type: 'producer', pulsePhase: 1, label: 'Producer B' },
        { x: w * 0.15, y: centerY + 120, type: 'producer', pulsePhase: 2, label: 'Producer C' }
      );

      nodes.push(
        { x: w * 0.5, y: centerY - 80, type: 'broker', pulsePhase: 0, label: 'Broker 1' },
        { x: w * 0.5, y: centerY + 80, type: 'broker', pulsePhase: 1.5, label: 'Broker 2' }
      );

      nodes.push(
        { x: w * 0.85, y: centerY - 120, type: 'consumer', pulsePhase: 0.5, label: 'Consumer A' },
        { x: w * 0.85, y: centerY, type: 'consumer', pulsePhase: 1.5, label: 'Consumer B' },
        { x: w * 0.85, y: centerY + 120, type: 'consumer', pulsePhase: 2.5, label: 'Consumer C' }
      );

      const producers = nodes.filter((n) => n.type === 'producer');
      const brokers = nodes.filter((n) => n.type === 'broker');
      const consumers = nodes.filter((n) => n.type === 'consumer');

      producers.forEach((producer, i) => {
        brokers.forEach((broker) => {
          paths.push({
            startX: producer.x,
            startY: producer.y,
            endX: broker.x,
            endY: broker.y,
            color: colors[i % colors.length],
            opacity: 0.15,
          });
        });
      });

      brokers.forEach((broker, i) => {
        consumers.forEach((consumer) => {
          paths.push({
            startX: broker.x,
            startY: broker.y,
            endX: consumer.x,
            endY: consumer.y,
            color: colors[(i + 2) % colors.length],
            opacity: 0.15,
          });
        });
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createPacket = () => {
      const producers = nodes.filter((n) => n.type === 'producer');
      const brokers = nodes.filter((n) => n.type === 'broker');

      if (producers.length === 0 || brokers.length === 0) return;

      const producer = producers[Math.floor(Math.random() * producers.length)];
      const broker = brokers[Math.floor(Math.random() * brokers.length)];
      const producerIndex = producers.indexOf(producer);

      packets.push({
        x: producer.x,
        y: producer.y,
        targetX: broker.x,
        targetY: broker.y,
        progress: 0,
        speed: 0.005 + Math.random() * 0.005,
        color: colors[producerIndex % colors.length],
        size: 3 + Math.random() * 2,
        streamId: producerIndex,
      });
    };

    const createConsumerPacket = (brokerX: number, brokerY: number, colorIndex: number) => {
      const consumers = nodes.filter((n) => n.type === 'consumer');
      if (consumers.length === 0) return;

      const consumer = consumers[Math.floor(Math.random() * consumers.length)];

      packets.push({
        x: brokerX,
        y: brokerY,
        targetX: consumer.x,
        targetY: consumer.y,
        progress: 0,
        speed: 0.005 + Math.random() * 0.005,
        color: colors[(colorIndex + 2) % colors.length],
        size: 3 + Math.random() * 2,
        streamId: colorIndex,
      });
    };

    const drawNode = (node: StreamNode) => {
      const pulse = Math.sin(time * 0.05 + node.pulsePhase * Math.PI) * 0.3 + 0.7;
      const baseSize = node.type === 'broker' ? 20 : 15;
      const size = baseSize * pulse;

      ctx.shadowBlur = 20;
      ctx.shadowColor =
        node.type === 'producer'
          ? 'rgba(45, 212, 191, 0.8)'
          : node.type === 'broker'
            ? 'rgba(59, 130, 246, 0.8)'
            : 'rgba(168, 85, 247, 0.8)';

      if (node.type === 'broker') {
        ctx.fillStyle =
          node.type === 'producer'
            ? 'rgba(45, 212, 191, 0.9)'
            : node.type === 'broker'
              ? 'rgba(59, 130, 246, 0.9)'
              : 'rgba(168, 85, 247, 0.9)';
        ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.strokeRect(node.x - size / 2, node.y - size / 2, size, size);
      } else {
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle =
          node.type === 'producer'
            ? 'rgba(45, 212, 191, 0.9)'
            : 'rgba(168, 85, 247, 0.9)';
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      ctx.font = '12px sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + size + 20);
    };

    const drawPath = (path: StreamPath) => {
      const gradient = ctx.createLinearGradient(path.startX, path.startY, path.endX, path.endY);
      gradient.addColorStop(0, path.color.replace('0.8)', `${path.opacity})`));
      gradient.addColorStop(0.5, path.color.replace('0.8)', `${path.opacity * 0.5})`));
      gradient.addColorStop(1, path.color.replace('0.8)', `${path.opacity * 0.2})`));

      ctx.beginPath();
      ctx.moveTo(path.startX, path.startY);
      ctx.lineTo(path.endX, path.endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      const arrowSize = 8;
      const angle = Math.atan2(path.endY - path.startY, path.endX - path.startX);
      const arrowX = path.endX - Math.cos(angle) * 30;
      const arrowY = path.endY - Math.sin(angle) * 30;

      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(
        arrowX - arrowSize * Math.cos(angle - Math.PI / 6),
        arrowY - arrowSize * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        arrowX - arrowSize * Math.cos(angle + Math.PI / 6),
        arrowY - arrowSize * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fillStyle = path.color.replace('0.8)', `${path.opacity * 2})`);
      ctx.fill();
    };

    const drawPacket = (packet: DataPacket) => {
      const dx = packet.targetX - packet.x;
      const dy = packet.targetY - packet.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        packet.x += (dx / distance) * packet.speed * 100;
        packet.y += (dy / distance) * packet.speed * 100;
        packet.progress += packet.speed;
      }

      ctx.shadowBlur = 15;
      ctx.shadowColor = packet.color;
      ctx.beginPath();
      ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
      ctx.fillStyle = packet.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      const tailLength = 15;
      const tailX = packet.x - (dx / distance) * tailLength;
      const tailY = packet.y - (dy / distance) * tailLength;

      const gradient = ctx.createLinearGradient(packet.x, packet.y, tailX, tailY);
      gradient.addColorStop(0, packet.color);
      gradient.addColorStop(1, packet.color.replace('0.8)', '0)'));

      ctx.beginPath();
      ctx.moveTo(packet.x, packet.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const drawMetrics = () => {
      const metricsX = 50;
      const metricsY = 80;

      ctx.font = 'bold 14px monospace';
      ctx.fillStyle = 'rgba(45, 212, 191, 0.9)';
      ctx.textAlign = 'left';
      ctx.fillText('STREAMING METRICS', metricsX, metricsY);

      ctx.font = '12px monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillText(`Messages/sec: ${Math.floor(Math.random() * 1000 + 5000)}`, metricsX, metricsY + 25);
      ctx.fillText(`Active Streams: ${packets.length}`, metricsX, metricsY + 45);
      ctx.fillText(`Throughput: ${(Math.random() * 50 + 150).toFixed(1)} MB/s`, metricsX, metricsY + 65);
      ctx.fillText(`Latency: ${(Math.random() * 5 + 10).toFixed(1)} ms`, metricsX, metricsY + 85);
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      paths.forEach(drawPath);

      nodes.forEach(drawNode);

      packets.forEach((packet, index) => {
        drawPacket(packet);

        const brokerNodes = nodes.filter((n) => n.type === 'broker');
        brokerNodes.forEach((broker) => {
          const dist = Math.sqrt(Math.pow(packet.x - broker.x, 2) + Math.pow(packet.y - broker.y, 2));
          if (dist < 25 && packet.targetX === broker.x && packet.targetY === broker.y) {
            createConsumerPacket(broker.x, broker.y, packet.streamId);
            packets.splice(index, 1);
          }
        });

        const consumerNodes = nodes.filter((n) => n.type === 'consumer');
        consumerNodes.forEach((consumer) => {
          const dist = Math.sqrt(Math.pow(packet.x - consumer.x, 2) + Math.pow(packet.y - consumer.y, 2));
          if (dist < 20 && packet.targetX === consumer.x && packet.targetY === consumer.y) {
            packets.splice(index, 1);
          }
        });
      });

      if (Math.random() < 0.15) {
        createPacket();
      }

      drawMetrics();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-transparent to-blue-950/30" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>
    </>
  );
}
