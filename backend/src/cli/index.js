const coa = require('coa');
const { connectDB } = require('../utils/database');

// Create CLI application
const cli = coa.Cmd()
  .name('postcraft-cli')
  .title('PostCraft CLI')
  .helpful()
  .opt()
    .name('version')
    .title('Show version')
    .short('v')
    .long('version')
    .flag()
    .only()
    .act(() => {
      console.log('PostCraft CLI v1.0.0');
      process.exit(0);
    })
    .end()
  .cmd()
    .name('db')
    .title('Database management commands')
    .cmd()
      .name('connect')
      .title('Test database connection')
      .act(async () => {
        try {
          await connectDB();
          console.log('✅ Database connection successful');
          process.exit(0);
        } catch (error) {
          console.error('❌ Database connection failed:', error.message);
          process.exit(1);
        }
      })
      .end()
    .end();

// Parse command line arguments
cli.run();
