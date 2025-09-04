import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const videoGeneratedPosts = {
  variations: [
    {
      id: 1,
      postType: 'video',
      platforms: {
        facebook: {
          caption:
            "Dreaming of a future in tech? 🚀 Our online AI & Coding courses make it easy to master complex skills, build incredible projects, and launch a thriving career! Learn at your own pace with expert guidance. What's one AI project you'd love to create? Share below!",
          hashtags: [
            '#AICoding',
            '#LearnOnline',
            '#TechEducation',
            '#FutureSkills',
            '#CodingForBeginners',
            '#ProjectBasedLearning',
            '#Innovation',
            '#DigitalSkills',
            '#CareerLaunch',
            '#OnlineLearning',
          ],
          cta: "Click 'Learn More' to explore courses!",
          characterCount: 328,
          media: {
            variationId: 1,
            video: {
              filename: 'video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              url: 'https://res.cloudinary.com/dsmk1zmjv/video/upload/v1756964522/AiPostCraft/video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              isPlaceholder: false,
            },
          },
        },
        instagram: {
          caption:
            "Unlock your potential in the world of AI & Coding! ✨ Our online programs are designed for ease, enabling you to build impressive projects and launch your tech future. From beginner to pro, we've got you covered. Ready to code your destiny? 💻",
          hashtags: [
            '#AICoding',
            '#TechSkills',
            '#OnlineLearning',
            '#CodeLife',
            '#FutureProof',
            '#DeveloperLife',
            '#InnovationNation',
            '#ProjectBased',
            '#LearnToCode',
            '#CareerGoals',
            '#DigitalTransformation',
            '#AIForEveryone',
            '#CodingCommunity',
            '#TechEducation',
            '#SkillUp',
          ],
          cta: 'Tap the link in bio to enroll!',
          characterCount: 294,
          media: {
            variationId: 1,
            video: {
              filename: 'video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              url: 'https://res.cloudinary.com/dsmk1zmjv/video/upload/v1756964522/AiPostCraft/video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              isPlaceholder: false,
            },
          },
        },
        linkedin: {
          caption:
            'Elevate your career trajectory in the rapidly evolving tech landscape. Our comprehensive online AI & Coding programs offer practical, project-based learning, equipping professionals with in-demand skills for innovation and leadership. Invest in your professional development and drive the future of technology.',
          hashtags: [
            '#AI',
            '#Coding',
            '#TechSkills',
            '#ProfessionalDevelopment',
            '#FutureOfWork',
          ],
          cta: 'Visit our website for course details and enrollment.',
          characterCount: 310,
          media: {
            variationId: 1,
            video: {
              filename: 'video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              url: 'https://res.cloudinary.com/dsmk1zmjv/video/upload/v1756964522/AiPostCraft/video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              isPlaceholder: false,
            },
          },
        },
        twitter: {
          caption:
            'Master AI & Coding online with ease! 🚀 Build amazing projects, launch your tech career. Practical skills, flexible learning. Your future starts here! #AICoding #LearnToCode #TechSkills #OnlineLearning',
          hashtags: [
            '#AICoding',
            '#LearnToCode',
            '#TechSkills',
            '#OnlineLearning',
            '#FutureProof',
          ],
          cta: 'Enroll now!',
          characterCount: 190,
          media: {
            variationId: 1,
            video: {
              filename: 'video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              url: 'https://res.cloudinary.com/dsmk1zmjv/video/upload/v1756964522/AiPostCraft/video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              isPlaceholder: false,
            },
          },
        },
        whatsapp: {
          caption:
            'Ready to master AI & Coding? 🤖💻 Our online courses make it easy to learn, build projects, and kickstart your tech career! Flexible & practical. Want to know more? 🤔',
          hashtags: [
            '#AICoding',
            '#OnlineLearning',
            '#CodeYourFuture',
            '#TechSkills',
          ],
          cta: "Reply 'INFO' or click the link to explore courses!",
          characterCount: 200,
          media: {
            variationId: 1,
            video: {
              filename: 'video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              url: 'https://res.cloudinary.com/dsmk1zmjv/video/upload/v1756964522/AiPostCraft/video_a2b80a60-d1f2-4fc7-997a-36503089af84.mp4',
              isPlaceholder: false,
            },
          },
        },
      },
    },
  ],
  metadata: {
    generatedAt: '2025-09-04T05:42:03.807Z',
    postType: 'video',
    platforms: ['facebook'],
    category: 'General',
    unifiedStyle: false,
    totalVariations: 1,
  },
};
const CarouselGeneratedPosts = {
  variations: [
    {
      id: 1,
      postType: 'carousel',
      platforms: {
        facebook: {
          caption:
            "Exciting news, community! 🚀 Ready to future-proof your marketing strategy? Join our FREE webinar on the latest Digital Marketing Trends and gain the edge you need to succeed. We'll cover everything from AI in marketing to the newest social media algorithms. Don't miss out on these actionable insights!",
          hashtags: [
            '#DigitalMarketing',
            '#Webinar',
            '#FreeLearning',
            '#MarketingTrends',
            '#BusinessGrowth',
            '#OnlineMarketing',
            '#SmallBusinessTips',
            '#StayAhead',
            '#LearnWithUs',
            '#MarketingStrategy',
          ],
          cta: "Click 'Learn More' to secure your spot now!",
          characterCount: 380,
          media: {
            variationId: 1,
            images: [
              {
                filename: 'image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903129/AiPostCraft/image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903133/AiPostCraft/image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        instagram: {
          caption:
            'Unlock the future of digital marketing! 💡 Our FREE webinar on emerging trends is designed to give you the edge you need. Discover cutting-edge strategies and transform your online presence. Get ready to innovate! 🚀',
          hashtags: [
            '#DigitalMarketingTrends',
            '#MarketingStrategy',
            '#WebinarAlert',
            '#FreeWebinar',
            '#MarketingTips',
            '#BusinessGrowth',
            '#OnlineSuccess',
            '#InstaMarketing',
            '#FutureOfMarketing',
            '#DigitalStrategy',
            '#LearnAndGrow',
            '#MarketingUpdate',
            '#DontMissOut',
            '#Innovation',
            '#TechTrends',
            '#SuccessMindset',
            '#OnlineBusiness',
            '#GrowthHacking',
            '#MarketingCommunity',
            '#EduWebinar',
          ],
          cta: 'Link in bio to register for free!',
          characterCount: 280,
          media: {
            variationId: 1,
            images: [
              {
                filename: 'image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903129/AiPostCraft/image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903133/AiPostCraft/image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        linkedin: {
          caption:
            "Elevate your digital marketing expertise. We're hosting a complimentary webinar focused on the most impactful Digital Marketing Trends shaping the industry today. Gain strategic insights to optimize your campaigns and drive measurable results. Ideal for marketing professionals, business leaders, and entrepreneurs looking to stay ahead in a dynamic landscape.",
          hashtags: [
            '#DigitalMarketing',
            '#MarketingTrends',
            '#Webinar',
            '#ProfessionalDevelopment',
            '#BusinessStrategy',
          ],
          cta: 'Register for your free seat today!',
          characterCount: 395,
          media: {
            variationId: 1,
            images: [
              {
                filename: 'image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903129/AiPostCraft/image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903133/AiPostCraft/image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        twitter: {
          caption:
            "Unlock the future of marketing! 🚀 Join our FREE webinar on Digital Marketing Trends. Learn what's next for AI, social media, and SEO. Don't get left behind! #DigitalMarketing #Webinar #MarketingTips #Free",
          hashtags: [
            '#DigitalMarketing',
            '#Webinar',
            '#MarketingTips',
            '#Free',
          ],
          cta: 'Grab your free spot!',
          characterCount: 210,
          media: {
            variationId: 1,
            images: [
              {
                filename: 'image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903129/AiPostCraft/image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903133/AiPostCraft/image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        whatsapp: {
          caption:
            "Hey there! 👋 Don't miss out on our FREE Digital Marketing Trends webinar! Learn the latest strategies to boost your business and stay competitive. Limited spots! 📈",
          hashtags: ['#DigitalMarketing', '#FreeWebinar', '#MarketingTips'],
          cta: 'Register here: [Link]',
          characterCount: 195,
          media: {
            variationId: 1,
            images: [
              {
                filename: 'image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903129/AiPostCraft/image_27b3aea4-2d6d-48ac-b3f5-1ab7b7fca609.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_7c35273c-b7fe-486e-b4ad-df9dcbc37316.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903131/AiPostCraft/image_b0382d3b-36d1-499c-bde0-2604b1ee0607.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903133/AiPostCraft/image_23b5790d-a925-460f-94c4-146ea6877aa6.png',
                isPlaceholder: false,
              },
            ],
          },
        },
      },
    },
    {
      id: 2,
      postType: 'carousel',
      platforms: {
        facebook: {
          caption:
            "Calling all marketers & business owners! 📢 Want to truly master the latest digital marketing trends? Our FREE webinar is packed with expert insights, practical tips, and a Q&A session to answer your burning questions. Let's grow together and dominate the digital space!",
          hashtags: [
            '#DigitalMarketingMastery',
            '#FreeWebinar',
            '#MarketingInsights',
            '#BusinessSuccess',
            '#LearnFromExperts',
            '#OnlineStrategy',
            '#CommunityLearning',
            '#MarketingEducation',
            '#FutureProof',
            '#ExpertTips',
          ],
          cta: 'RSVP now and invite a friend!',
          characterCount: 350,
          media: {
            variationId: 2,
            images: [
              {
                filename: 'image_e306173d-6866-42c5-8784-0a06a4980984.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903156/AiPostCraft/image_e306173d-6866-42c5-8784-0a06a4980984.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903157/AiPostCraft/image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903158/AiPostCraft/image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903159/AiPostCraft/image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        instagram: {
          caption:
            'Transform your marketing game! ✨ Dive deep into cutting-edge digital marketing trends with our FREE expert webinar. Get ready to innovate, strategize, and achieve unparalleled success online. This is your chance to gain a competitive edge! 🚀',
          hashtags: [
            '#DigitalMarketingExpert',
            '#MarketingInnovation',
            '#FreeWebinar',
            '#BusinessGrowth',
            '#OnlineMarketingTips',
            '#StrategySession',
            '#LearnWithUs',
            '#InstaBusiness',
            '#MarketingGoals',
            '#DigitalTrends2024',
            '#UnlockPotential',
            '#MarketingJourney',
            '#SuccessMindset',
            '#Trendsetter',
            '#KnowledgeIsPower',
            '#MasterClass',
            '#MarketingStrategy',
            '#OnlineSuccess',
            '#FutureReady',
            '#DigitalSkills',
          ],
          cta: 'Tap the link in bio to secure your spot!',
          characterCount: 320,
          media: {
            variationId: 2,
            images: [
              {
                filename: 'image_e306173d-6866-42c5-8784-0a06a4980984.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903156/AiPostCraft/image_e306173d-6866-42c5-8784-0a06a4980984.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903157/AiPostCraft/image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903158/AiPostCraft/image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903159/AiPostCraft/image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        linkedin: {
          caption:
            'Gain a competitive edge in the evolving digital landscape. Our upcoming complimentary webinar will dissect the most impactful digital marketing trends, offering a deep dive into advanced strategies and their practical application. Join industry experts for actionable insights that will refine your approach and boost your professional trajectory.',
          hashtags: [
            '#DigitalMarketing',
            '#MarketingStrategy',
            '#WebinarSeries',
            '#IndustryInsights',
            '#ProfessionalGrowth',
          ],
          cta: 'Secure your complimentary registration.',
          characterCount: 390,
          media: {
            variationId: 2,
            images: [
              {
                filename: 'image_e306173d-6866-42c5-8784-0a06a4980984.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903156/AiPostCraft/image_e306173d-6866-42c5-8784-0a06a4980984.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903157/AiPostCraft/image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903158/AiPostCraft/image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903159/AiPostCraft/image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        twitter: {
          caption:
            'Unlock expert insights! 📈 Join our FREE webinar on top Digital Marketing Trends. Elevate your strategy with practical tips from industry leaders. #DigitalMarketing #Webinar #ExpertTips #Free',
          hashtags: ['#DigitalMarketing', '#Webinar', '#ExpertTips', '#Free'],
          cta: 'Enroll for free today!',
          characterCount: 220,
          media: {
            variationId: 2,
            images: [
              {
                filename: 'image_e306173d-6866-42c5-8784-0a06a4980984.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903156/AiPostCraft/image_e306173d-6866-42c5-8784-0a06a4980984.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903157/AiPostCraft/image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903158/AiPostCraft/image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903159/AiPostCraft/image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                isPlaceholder: false,
              },
            ],
          },
        },
        whatsapp: {
          caption:
            "Big news! 🎉 We're hosting a FREE webinar on Digital Marketing Trends with expert insights. Don't miss this chance to upgrade your skills and boost your business! 🚀",
          hashtags: ['#DigitalMarketing', '#FreeWebinar', '#ExpertTips'],
          cta: 'Register here: [Link]',
          characterCount: 190,
          media: {
            variationId: 2,
            images: [
              {
                filename: 'image_e306173d-6866-42c5-8784-0a06a4980984.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903156/AiPostCraft/image_e306173d-6866-42c5-8784-0a06a4980984.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903157/AiPostCraft/image_de86bbe2-cece-4930-a6c9-8d65d5282918.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903158/AiPostCraft/image_57070d1b-17ac-43d2-acf0-05146f554ccf.png',
                isPlaceholder: false,
              },
              {
                filename: 'image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756903159/AiPostCraft/image_7d9829c7-e330-4bff-a8f5-385f47bccdd8.png',
                isPlaceholder: false,
              },
            ],
          },
        },
      },
    },
  ],
  metadata: {
    generatedAt: '2025-09-03T12:39:19.990Z',
    postType: 'carousel',
    platforms: ['facebook', 'instagram', 'linkedin'],
    category: 'Business',
    unifiedStyle: false,
    totalVariations: 2,
  },
};

const secondGenetposts = {
  variations: [
    {
      id: 1,
      postType: 'image',
      platforms: {
        facebook: {
          caption:
            "Get ready to redefine your photography! 📸 The new Meco M1 Pro is here, packed with cutting-edge camera features that will transform your shots. Say goodbye to blurry night photos and hello to crystal-clear detail, even in the dimmest light! We've pushed the boundaries so you can capture every moment perfectly. What's the first thing you'd photograph with an M1 Pro? Tell us below! 👇",
          hashtags: [
            '#MecoM1Pro',
            '#Meco',
            '#NewSmartphone',
            '#CameraRevolution',
            '#MobilePhotography',
            '#TechLaunch',
            '#ProCamera',
            '#NightMode',
            '#CaptureTheMoment',
            '#Innovation',
          ],
          cta: 'Learn more and pre-order yours today at meco.com!',
          characterCount: 384,
          media: {
            variationId: 1,
            images: [
              {
                filename: 'image_0b4403d7-f55f-46be-b934-add2dcb60a85.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756914521/AiPostCraft/image_0b4403d7-f55f-46be-b934-add2dcb60a85.png',
                isPlaceholder: false,
              },
            ],
          },
        },
      },
    },
    {
      id: 2,
      postType: 'image',
      platforms: {
        facebook: {
          caption:
            'Unleash your inner photographer! ✨ The Meco M1 Pro is designed for creators, adventurers, and anyone who loves to tell stories through stunning visuals. Our advanced camera system brings studio-quality shots to your pocket, with features like AI scene optimization and incredible zoom capabilities. Imagine the possibilities! What kind of stories will you tell with your Meco M1 Pro? Share your ideas! 👇',
          hashtags: [
            '#MecoM1Pro',
            '#SmartphoneCamera',
            '#PhotographyLovers',
            '#TechGadgets',
            '#NewPhone',
            '#MecoTech',
            '#CreativePhotography',
            '#ZoomLens',
            '#PicturePerfect',
            '#Innovation',
          ],
          cta: 'Discover all the camera features and more at meco.com!',
          characterCount: 396,
          media: {
            variationId: 2,
            images: [
              {
                filename: 'image_4349e671-4440-4ec3-9641-afb5d314be5a.png',
                url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1756914545/AiPostCraft/image_4349e671-4440-4ec3-9641-afb5d314be5a.png',
                isPlaceholder: false,
              },
            ],
          },
        },
      },
    },
  ],

  metadata: {
    generatedAt: '2025-09-03T15:49:06.105Z',
    postType: 'image',
    platforms: ['facebook'],
    category: 'General',
    unifiedStyle: false,
    totalVariations: 2,
  },
};

const PostResults = ({ generatedPosts, onRegenerate, onExport, isLoading }) => {
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState('facebook');
  const [editingContent, setEditingContent] = useState({});
  const [instagramMediaTab, setInstagramMediaTab] = useState('carousel');

  // const generatedPosts = CarouselGeneratedPosts;
  // const generatedPosts = videoGeneratedPosts;
  // const generatedPosts = secondGenetposts;

  const variations = generatedPosts.variations;
  const currentVariation = variations[selectedVariation];
  const currentPlatformData = currentVariation?.platforms[selectedPlatform];
  // const platfroms = generatedPosts.metadata.platforms;

  useEffect(() => {
    initializeEditingContent();
  }, [selectedVariation, currentVariation]);

  if (!generatedPosts || !generatedPosts.variations) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-gray-500 mb-4">No posts generated yet</div>
          <Button onClick={onRegenerate} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Posts'}
          </Button>
        </div>
      </div>
    );
  }

  // Platform guidelines
  const platformGuidelines = {
    facebook: { maxCaption: 63206, maxHashtags: 30, name: 'Facebook' },
    instagram: { maxCaption: 2200, maxHashtags: 30, name: 'Instagram' },
    linkedin: { maxCaption: 3000, maxHashtags: 15, name: 'LinkedIn' },
    twitter: { maxCaption: 280, maxHashtags: 10, name: 'Twitter/X' },
    whatsapp: { maxCaption: 1000, maxHashtags: 15, name: 'WhatsApp' },
  };

  console.log({ generatedPosts });

  // Initialize editing content
  const initializeEditingContent = () => {
    if (!editingContent[selectedVariation]) {
      setEditingContent((prev) => ({
        ...prev,
        [selectedVariation]: {
          ...currentVariation.platforms,
        },
      }));
    }
  };

  const handleContentChange = (field, value) => {
    setEditingContent((prev) => ({
      ...prev,
      [selectedVariation]: {
        ...prev[selectedVariation],
        [selectedPlatform]: {
          ...prev[selectedVariation][selectedPlatform],
          [field]: value,
        },
      },
    }));
  };

  const getCurrentContent = () => {
    return (
      editingContent[selectedVariation]?.[selectedPlatform] ||
      currentPlatformData
    );
  };

  const currentContent = getCurrentContent();

  // Carousel and Video preview helpers
  const renderCarousel = (images) => {
    // Simple carousel preview (no controls for brevity)
    return (
      <div className="mb-3 flex space-x-2 overflow-x-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            alt={`Carousel ${idx + 1}`}
            className="w-32 h-32 object-cover rounded"
          />
        ))}
      </div>
    );
  };

  const renderVideo = (video) => {
    if (!video?.url) return null;
    return (
      <div className="mb-3">
        <video
          src={video.url}
          controls
          className="w-full rounded"
          style={{ maxHeight: 320 }}
        />
      </div>
    );
  };

  const renderPlatformPreview = () => {
    const content = getCurrentContent();
    const postType = generatedPosts?.metadata?.postType || 'image'; // fallback to image

    // Helper to render media based on postType
    const renderMedia = () => {
      console.log({ postType, cond: content.media?.images?.length > 1 });
      if (postType === 'carousel' && content.media?.images?.length > 1) {
        return renderCarousel(content.media.images);
      }
      if (postType === 'video' && content.media?.video) {
        return renderVideo(content.media.video);
      }
      // Default: single image
      if (content.media?.images && content.media.images[0]?.url) {
        return (
          <div className="mb-3">
            <img
              src={content.media.images[0]?.url}
              alt="Generated content"
              className="w-full rounded"
            />
          </div>
        );
      }
      return null;
    };

    // Instagram media rendering logic
    const renderInstagramMedia = () => {
      const hasCarousel =
        postType === 'carousel' && content.media?.images?.length > 1;
      const hasVideo = postType === 'video' && content.media?.video;
      const showTabs = hasCarousel && hasVideo;

      if (showTabs) {
        return (
          <div>
            <div className="flex space-x-2 mb-2">
              <button
                className={`px-3 py-1 rounded ${
                  instagramMediaTab === 'carousel'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setInstagramMediaTab('carousel')}
              >
                Carousel
              </button>
              <button
                className={`px-3 py-1 rounded ${
                  instagramMediaTab === 'video'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setInstagramMediaTab('video')}
              >
                Video
              </button>
            </div>
            {instagramMediaTab === 'carousel' &&
              hasCarousel &&
              renderCarousel(content.media.images)}
            {instagramMediaTab === 'video' &&
              hasVideo &&
              renderVideo(content.media.video)}
          </div>
        );
      }

      if (hasCarousel) return renderCarousel(content.media.images);
      if (hasVideo) return renderVideo(content.media.video);
      if (content.media?.images && content.media.images[0]?.url) {
        return (
          <div className="mb-3">
            <img
              src={content.media.images[0]?.url}
              alt="Generated content"
              className="w-full"
            />
          </div>
        );
      }
      return null;
    };

    switch (selectedPlatform) {
      case 'facebook':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">YP</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Your Page</div>
                <div className="text-xs text-gray-500">Just now</div>
              </div>
              <div className="ml-auto">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm mb-2">{content.caption}</p>
              <p className="text-sm font-medium mb-2">{content.cta}</p>
              <div className="flex flex-wrap gap-1">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>
            </div>

            {renderMedia()}

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>24</span>
              <span>3 comments</span>
              <span>2 shares</span>
            </div>

            <div className="flex space-x-4 border-t pt-3">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>👍</span>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>💬</span>
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>↗️</span>
                <span>Share</span>
              </button>
            </div>
          </div>
        );

      case 'instagram': {
        return (
          <div className="bg-white border border-gray-200 rounded-lg max-w-sm">
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YP</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">your_page</div>
                </div>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
            </div>

            <div>{renderInstagramMedia()}</div>

            <div className="p-3">
              <div className="flex space-x-4 mb-3">
                <button className="text-gray-600 hover:text-red-500">🤍</button>
                <button className="text-gray-600 hover:text-blue-500">
                  💬
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                  📤
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                  🔖
                </button>
              </div>

              <div className="text-sm font-semibold mb-1">152 likes</div>

              <div className="text-sm mb-2">
                <span className="font-semibold">your_page</span>{' '}
                {content.caption}
              </div>

              <div className="text-sm mb-2">{content.cta}</div>

              <div className="flex flex-wrap gap-1 mb-2">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>

              <div className="text-xs text-gray-500 mb-2">
                View all 12 comments
              </div>
              <div className="text-xs text-gray-500">2 MINUTES AGO</div>

              <div className="flex items-center space-x-2 mt-3 border-t pt-3">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-sm border-none outline-none"
                />
                <button className="text-blue-500 text-sm font-semibold">
                  Post
                </button>
              </div>
            </div>
          </div>
        );
      }

      case 'linkedin':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YP</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Your Page</div>
                  <div className="text-xs text-gray-500">Company Page • 2m</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  + Follow
                </button>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm mb-2">{content.caption}</p>
              <p className="text-sm font-medium mb-2">{content.cta}</p>
              <div className="flex flex-wrap gap-1">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>
            </div>

            {postType === 'carousel' && content.media?.images?.length > 1
              ? renderCarousel(content.media.images)
              : postType === 'video' && content.media?.video
                ? renderVideo(content.media.video)
                : content.media?.images &&
                  content.media.images[0]?.url && (
                    <div className="mb-3">
                      <img
                        src={content.media.images[0]?.url}
                        alt="Generated content"
                        className="w-full rounded"
                      />
                    </div>
                  )}

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>👁️ 47</span>
              <span>8 comments</span>
              <span>3 reposts</span>
            </div>

            <div className="flex space-x-4 border-t pt-3">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>👍</span>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>💬</span>
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>🔄</span>
                <span>Repost</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>📤</span>
                <span>Send</span>
              </button>
            </div>
          </div>
        );

      case 'twitter':
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">YP</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Your Page</div>
                <div className="text-xs text-gray-500">@your_page • 2m</div>
              </div>
              <div className="ml-auto">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm mb-2">
                {content.caption?.length > 280
                  ? `${content.caption.substring(0, 280)}...`
                  : content.caption}
              </p>
              <p className="text-sm font-medium mb-2">{content.cta}</p>
              <div className="flex flex-wrap gap-1">
                {content.hashtags?.map((tag, index) => (
                  <span key={index} className="text-blue-600 text-xs">
                    #{tag.replace('#', '')}
                  </span>
                ))}
              </div>
            </div>

            {content.media.images && (
              <div className="mb-3 rounded-lg overflow-hidden">
                <img
                  src={content.media.images[0]?.url}
                  alt="Generated content"
                  className="w-full"
                />
              </div>
            )}

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>💬 24</span>
              <span>🔄 12</span>
              <span>❤️ 89</span>
              <span>📊 1.2K</span>
              <span>📤</span>
            </div>
          </div>
        );

      case 'whatsapp':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-sm">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YN</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Your Name</div>
                  <div className="text-xs text-gray-500">Just now</div>
                </div>
              </div>

              {content.media.images && (
                <div className="mb-3">
                  <img
                    src={content.media.images[0]?.url}
                    alt="Generated content"
                    className="w-full rounded"
                  />
                </div>
              )}

              <div className="mb-3">
                <p className="text-sm text-green-800 mb-2">{content.caption}</p>
                <p className="text-sm font-medium text-green-800 mb-2">
                  {content.cta}
                </p>
                <div className="flex flex-wrap gap-1">
                  {content.hashtags?.map((tag, index) => (
                    <span key={index} className="text-blue-600 text-xs">
                      #{tag.replace('#', '')}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-center space-x-1">
                <span className="text-xs text-gray-500">2:14 PM</span>
                <span className="text-green-500">✓✓</span>
              </div>
            </div>

            <div className="mt-3">
              <div className="bg-gray-100 rounded-lg p-2 max-w-xs ml-auto">
                <p className="text-sm text-gray-800">Great content! 👍</p>
                <div className="flex justify-end">
                  <span className="text-xs text-gray-500">2:15 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center space-x-2 bg-white rounded-lg p-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm border-none outline-none"
              />
              <button className="text-green-500">📤</button>
            </div>
          </div>
        );

      default:
        return <div>Preview not available</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header with Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Generated Posts</h2>
        <div className="flex space-x-3">
          <Button onClick={onRegenerate} variant="outline" disabled={isLoading}>
            {isLoading ? 'Regenerating...' : 'Regenerate'}
          </Button>
          <Button onClick={onExport} variant="outline">
            Export All
          </Button>
        </div>
      </div>

      {/* Variation Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {variations.map((variation, index) => (
          <button
            key={index}
            onClick={() => setSelectedVariation(index)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedVariation === index
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
          >
            Variation {index + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Editing */}
        <div className="space-y-6">
          {/* Platform Selection */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-lg font-semibold mb-4">Platform Selection</h3>
            <div className="flex space-x-2">
              {Object.entries(platformGuidelines).map(
                ([platform, guidelines]) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPlatform === platform
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">
                      {platform === 'facebook' && '📘'}
                      {platform === 'instagram' && '📷'}
                      {platform === 'linkedin' && '💼'}
                      {platform === 'twitter' && '🐦'}
                      {platform === 'whatsapp' && '💬'}
                    </span>
                    <span>{guidelines.name}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Editing Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">✏️</span>
              <h3 className="text-lg font-semibold">
                Editing for {platformGuidelines[selectedPlatform].name}
              </h3>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              Max Caption:{' '}
              {platformGuidelines[selectedPlatform].maxCaption.toLocaleString()}{' '}
              characters
              <br />
              Max Hashtags: {platformGuidelines[selectedPlatform].maxHashtags}
            </div>

            {/* Caption Editor */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Caption
                </label>
                <span
                  className={`text-xs ${
                    currentContent.caption?.length >
                    platformGuidelines[selectedPlatform].maxCaption
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {currentContent.caption?.length || 0}/
                  {platformGuidelines[selectedPlatform].maxCaption}
                </span>
              </div>
              <textarea
                value={currentContent.caption || ''}
                onChange={(e) => handleContentChange('caption', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Enter your caption..."
              />
              {currentContent.caption?.length >
                platformGuidelines[selectedPlatform].maxCaption && (
                <p className="text-red-500 text-xs mt-1">
                  Caption exceeds the limit for{' '}
                  {platformGuidelines[selectedPlatform].name}
                </p>
              )}
            </div>

            {/* Hashtags Editor */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  # Hashtags
                </label>
                <span
                  className={`text-xs ${
                    currentContent.hashtags?.length >
                    platformGuidelines[selectedPlatform].maxHashtags
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {currentContent.hashtags?.length || 0}/
                  {platformGuidelines[selectedPlatform].maxHashtags} hashtags
                </span>
              </div>
              <input
                type="text"
                value={currentContent.hashtags?.join(' ') || ''}
                onChange={(e) =>
                  handleContentChange(
                    'hashtags',
                    e.target.value.split(' ').filter((tag) => tag.trim())
                  )
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="#hashtag1 #hashtag2 #hashtag3"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate hashtags with spaces. Include the # symbol.
              </p>
            </div>

            {/* Call to Action Editor */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Call to Action
              </label>
              <input
                type="text"
                value={currentContent.cta || ''}
                onChange={(e) => handleContentChange('cta', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Comment your thoughts below! 👍"
              />
              <p className="text-xs text-gray-500 mt-1">
                Encourage engagement with your audience
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">
                {selectedPlatform === 'facebook' && '📘'}
                {selectedPlatform === 'instagram' && '📷'}
                {selectedPlatform === 'linkedin' && '💼'}
                {selectedPlatform === 'twitter' && '🐦'}
                {selectedPlatform === 'whatsapp' && '💬'}
              </span>
              <h3 className="text-lg font-semibold">
                {platformGuidelines[selectedPlatform].name} Preview
              </h3>
            </div>

            <div className="flex justify-center">{renderPlatformPreview()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostResults;
