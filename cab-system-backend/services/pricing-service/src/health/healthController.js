const mongoose = require('mongoose');

const healthCheck = async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      database: {
        status: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
      }
    }
  };

  const isHealthy = health.services.database.status === 'connected';
  res.status(isHealthy ? 200 : 503).json(health);
};

module.exports = { healthCheck };