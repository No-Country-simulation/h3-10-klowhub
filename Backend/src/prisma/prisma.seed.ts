import { PrismaService } from './prisma.service';
import { PasswordService } from 'src/shared-module/password.service';

async function main() {
  const prisma = new PrismaService();
  const passwordService = new PasswordService();

  const hashedPassword = await passwordService.hashPassword('12345678');

  const user1 = await prisma.users.create({
    data: {
      name: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      password: hashedPassword,
      role_id: 1,
    },
  });

  const user2 = await prisma.users.create({
    data: {
      name: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      password: hashedPassword,
      role_id: 1,
    },
  });

  const seller1 = await prisma.sellers.create({
    data: {
      user_id: user1.user_id,
      description: 'Experienced seller specializing in technology.',
      sales_type_id: 1,
      collection_method_id: 1,
    },
  });

  const seller2 = await prisma.sellers.create({
    data: {
      user_id: user2.user_id,
      description: 'Creative seller offering unique courses.',
      sales_type_id: 2,
      collection_method_id: 1,
    },
  });

  await prisma.types_of_courses.createMany({
    data: [{ name: 'course' }, { name: 'lesson' }],
  });

  await prisma.courses_level.createMany({
    data: [
      { name: 'beginner' },
      { name: 'intermediate' },
      { name: 'advanced' },
    ],
  });

  await prisma.platforms.createMany({
    data: [{ name: 'appsheet' }, { name: 'powerapps' }],
  });

  await prisma.languages.createMany({
    data: [{ name: 'english' }, { name: 'spanish' }],
  });

  await prisma.sectors.createMany({
    data: [
      { name: 'industry' },
      { name: 'time management' },
      { name: 'proyect management' },
      { name: 'inventory management' },
      { name: 'sales and ORM' },
      { name: 'works and construction' },
      { name: 'logistic and transport' },
      { name: 'professional services' },
      { name: 'digital marketing' },
      { name: 'e-commerce' },
      { name: 'entertainment and media' },
      { name: 'security and surveillance' },
      { name: 'research and development' },
      { name: 'agriculture and environment' },
      { name: 'administration' },
    ],
  });

  await prisma.content_pillars.createMany({
    data: [
      { name: 'ux-ui' },
      { name: 'database' },
      { name: 'expressions and formulas' },
      { name: 'automation' },
      { name: 'workflow' },
      { name: 'actions-behavior' },
      { name: 'security-accesibility' },
      { name: 'general' },
    ],
  });

  await prisma.functionality.createMany({
    data: [
      { name: 'calendar' },
      { name: 'PDF generation' },
      { name: 'automatic reports' },
      { name: 'chatbot (bot)' },
      { name: 'emails' },
      { name: 'sms' },
      { name: 'push notifications' },
      { name: 'qr generation and scanning' },
      { name: 'geolocation' },
      { name: 'ocr' },
      { name: 'machine learning' },
      { name: 'usage statistics' },
      { name: 'dashboard - reports and analysis' },
      { name: 'user management' },
      { name: 'advanced reporting' },
      { name: 'data integration' },
      { name: 'permission management' },
      { name: 'data analysis' },
      { name: 'optimization - performance' },
      { name: 'deployment' },
      { name: 'data import - export' },
      { name: 'digital signatures' },
      { name: 'document scanning' },
      { name: 'automation monitor' },
      { name: 'audit history' },
      { name: 'api integrations' },
    ],
  });

  await prisma.tools.createMany({
    data: [
      { name: 'google sheets' },
      { name: 'looker studio' },
      { name: 'mysql' },
      { name: 'postgresql' },
      { name: 'salesforce' },
      { name: 'airtable' },
      { name: 'dropbox' },
      { name: 'box' },
      { name: 'google analytics' },
      { name: 'zapier' },
      { name: 'wordpress' },
      { name: 'shopify' },
      { name: 'whatsapp api' },
      { name: 'power bi' },
      { name: 'twilio' },
      { name: 'trello' },
      { name: 'google calendar' },
      { name: 'google drive' },
      { name: 'google maps' },
    ],
  });

  await prisma.courses.create({
    data: {
      title: 'Introduction to AppSheet',
      seller_id: seller1.seller_id,
      type_course_id: 1,
      premium: false,
      description: 'Learn how to build apps with AppSheet.',
      course_level_id: 1,
      platform_id: 1,
      language_id: 1,
      sector_id: 1,
      content_pillar_id: 1,
      functionality_id: 1,
      tool_id: 1,
      tags: ['AppSheet', 'No-Code'],
      price: 49.99,
      video_url: '',
      image_url: '',
    },
  });

  await prisma.courses.create({
    data: {
      title: 'PowerApps for Beginners',
      seller_id: seller2.seller_id,
      type_course_id: 1,
      premium: true,
      description: 'Get started with Microsoft PowerApps.',
      course_level_id: 1,
      platform_id: 2,
      language_id: 1,
      sector_id: 2,
      content_pillar_id: 2,
      functionality_id: 2,
      tool_id: 2,
      tags: ['PowerApps', 'Microsoft'],
      price: 99.99,
      video_url: '',
      image_url: '',
    },
  });

  await prisma.courses.create({
    data: {
      title: 'Advanced Google Sheets Techniques',
      seller_id: seller1.seller_id,
      type_course_id: 2,
      premium: false,
      description: 'Master advanced features of Google Sheets.',
      course_level_id: 2,
      platform_id: 1,
      language_id: 2,
      sector_id: 3,
      content_pillar_id: 3,
      functionality_id: 3,
      tool_id: 3,
      tags: ['Google Sheets', 'Spreadsheets'],
      price: 29.99,
      video_url: '',
      image_url: '',
    },
  });

  await prisma.module.createMany({
    data: [
      {
        course_id: 1,
        title: 'Module 1',
        description: 'Getting Started with AppSheet',
      },
      {
        course_id: 1,
        title: 'Module 2',
        description: 'Building Your First App',
      },
      {
        course_id: 1,
        title: 'Module 3',
        description: 'Advanced AppSheet Features',
      },
      {
        course_id: 1,
        title: 'Module 4',
        description: 'Deploying Your App',
      },
    ],
  });

  await prisma.lesson.createMany({
    data: [
      {
        module_id: 1,
        title: 'Lesson 1',
        description: 'Introduction to AppSheet',
        video_url: '',
      },
      {
        module_id: 1,
        title: 'Lesson 2',
        description: 'AppSheet Interface Overview',
        video_url: '',
      },
      {
        module_id: 1,
        title: 'Lesson 3',
        description: 'Creating Your First App',
        video_url: '',
      },
      {
        module_id: 2,
        title: 'Lesson 1',
        description: 'Data Sources in AppSheet',
        video_url: '',
      },
      {
        module_id: 2,
        title: 'Lesson 2',
        description: 'Building App UI',
        video_url: '',
      },
      {
        module_id: 2,
        title: 'Lesson 3',
        description: 'Adding App Logic',
        video_url: '',
      },
      {
        module_id: 3,
        title: 'Lesson 1',
        description: 'Using AppSheet Expressions',
        video_url: '',
      },
      {
        module_id: 3,
        title: 'Lesson 2',
        description: 'Automating Tasks with Workflows',
        video_url: '',
      },
      {
        module_id: 3,
        title: 'Lesson 3',
        description: 'Advanced Security Settings',
        video_url: '',
      },
      {
        module_id: 4,
        title: 'Lesson 1',
        description: 'Testing Your App',
        video_url: '',
      },
      {
        module_id: 4,
        title: 'Lesson 2',
        description: 'Deploying Your App',
        video_url: '',
      },
      {
        module_id: 4,
        title: 'Lesson 3',
        description: 'Maintaining Your App',
        video_url: '',
      },
    ],
  });

  await prisma.applications.createMany({
    data: [
      {
        title: 'Advanced AppSheet Project Management',
        seller_id: seller1.seller_id,
        type_course_id: 1,
        premium: true,
        description:
          'An advanced project management application built with AppSheet.',
        course_level_id: 3,
        platform_id: 1,
        language_id: 1,
        sector_id: 3,
        content_pillar_id: 1,
        functionality_id: 1,
        tool_id: 1,
        tags: ['AppSheet', 'Project Management'],
        price: 199.99,
      },
      {
        title: 'PowerApps Advanced Sales Tracker',
        seller_id: seller2.seller_id,
        type_course_id: 2,
        premium: true,
        description:
          'An advanced sales tracking application built with PowerApps.',
        course_level_id: 2,
        platform_id: 2,
        language_id: 2,
        sector_id: 5,
        content_pillar_id: 2,
        functionality_id: 2,
        tool_id: 2,
        tags: ['PowerApps', 'Sales Tracker'],
        price: 299.99,
      },
    ],
  });

  await prisma.media.createMany({
    data: [
      {
        application_id: 1,
        title: 'AppSheet Project Management Overview',
        description:
          'An overview of the AppSheet project management application.',
        url: 'https://example.com/media1',
      },
      {
        application_id: 1,
        title: 'AppSheet Project Management Tutorial',
        description:
          'A tutorial on how to use the AppSheet project management application.',
        url: 'https://example.com/media2',
      },
      {
        application_id: 2,
        title: 'PowerApps Sales Tracker Overview',
        description: 'An overview of the PowerApps sales tracking application.',
        url: 'https://example.com/media3',
      },
      {
        application_id: 2,
        title: 'PowerApps Sales Tracker Tutorial',
        description:
          'A tutorial on how to use the PowerApps sales tracking application.',
        url: 'https://example.com/media4',
      },
    ],
  });

  console.log('Seed completed successfully!');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
