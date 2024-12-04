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
      title: 'Web Development for Beginners',
      seller_id: seller1.seller_id,
      type_course_id: 1,
      premium: false,
      description: 'Learn the basics of web development.',
      course_level_id: 1,
      platform_id: 1,
      language_id: 1,
      sector_id: 1,
      content_pillar_id: 1,
      functionality_id: 1,
      tool_id: 1,
      tags: ['HTML', 'CSS', 'JavaScript'],
      price: 49.99,
      video_url: '',
    },
  });

  await prisma.courses.create({
    data: {
      title: 'Advanced Python Programming',
      seller_id: seller2.seller_id,
      type_course_id: 1,
      premium: true,
      description: 'Master Python with this advanced course.',
      course_level_id: 2,
      platform_id: 1,
      language_id: 1,
      sector_id: 2,
      content_pillar_id: 2,
      functionality_id: 2,
      tool_id: 2,
      tags: ['Python', 'Programming'],
      price: 99.99,
      video_url: '',
    },
  });

  await prisma.courses.create({
    data: {
      title: 'Graphic Design Basics',
      seller_id: seller1.seller_id,
      type_course_id: 2,
      premium: false,
      description: 'Introduction to graphic design principles.',
      course_level_id: 1,
      platform_id: 1,
      language_id: 2,
      sector_id: 3,
      content_pillar_id: 3,
      functionality_id: 3,
      tool_id: 3,
      tags: ['Design', 'Graphics'],
      price: 29.99,
      video_url: '',
    },
  });

  await prisma.module.createMany({
    data: [
      {
        course_id: 1,
        title: 'Module 1',
        description: 'Introduction to HTML',
      },
      {
        course_id: 1,
        title: 'Module 2',
        description: 'Introduction to CSS',
      },
      {
        course_id: 1,
        title: 'Module 3',
        description: 'Introduction to JavaScript',
      },
      {
        course_id: 1,
        title: 'Module 4',
        description: 'Building a Simple Website',
      },
    ],
  });

  await prisma.lesson.createMany({
    data: [
      {
        module_id: 1,
        title: 'Lesson 1',
        description: 'HTML Basics',
        video_url: '',
      },
      {
        module_id: 1,
        title: 'Lesson 2',
        description: 'HTML Elements',
        video_url: '',
      },
      {
        module_id: 1,
        title: 'Lesson 3',
        description: 'HTML Attributes',
        video_url: '',
      },
      {
        module_id: 2,
        title: 'Lesson 1',
        description: 'CSS Basics',
        video_url: '',
      },
      {
        module_id: 2,
        title: 'Lesson 2',
        description: 'CSS Selectors',
        video_url: '',
      },
      {
        module_id: 2,
        title: 'Lesson 3',
        description: 'CSS Properties',
        video_url: '',
      },
      {
        module_id: 3,
        title: 'Lesson 1',
        description: 'JavaScript Basics',
        video_url: '',
      },
      {
        module_id: 3,
        title: 'Lesson 2',
        description: 'JavaScript Variables',
        video_url: '',
      },
      {
        module_id: 3,
        title: 'Lesson 3',
        description: 'JavaScript Functions',
        video_url: '',
      },
      {
        module_id: 4,
        title: 'Lesson 1',
        description: 'Building a Simple Website - Part 1',
        video_url: '',
      },
      {
        module_id: 4,
        title: 'Lesson 2',
        description: 'Building a Simple Website - Part 2',
        video_url: '',
      },
      {
        module_id: 4,
        title: 'Lesson 3',
        description: 'Building a Simple Website - Part 3',
        video_url: '',
      },
    ],
  });

  console.log('Seed completed successfully!');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
