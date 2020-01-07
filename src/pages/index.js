import React from "react";

import Layout from "../components/layout";
import SEO from "gatsby-theme-octahedroid/src/components/seo";

import CtaBlock from 'gatsby-theme-octahedroid/src/components/cta-block';
import HeroCta from 'gatsby-theme-octahedroid/src/components/hero-cta';
import List from 'gatsby-theme-octahedroid/src/components/list';
import { FaCss3, FaDrupal, FaDev, FaFortAwesomeAlt, FaGithub, FaEvernote, FaChevronRight } from "react-icons/fa";
import CardGroup from 'gatsby-theme-octahedroid/src/components/card-group'
import { Coding, CodeThinking, FeaturesOverview } from 'gatsby-theme-octahedroid/src/components/undraw';
import ImageGroup from 'gatsby-theme-octahedroid/src/components/image-group';
import TextBlock from 'gatsby-theme-octahedroid/src/components/text-block';
import Accordion from 'gatsby-theme-octahedroid/src/components/accordion';
import Title from 'gatsby-theme-octahedroid/src/components/title';
import MediaItem from 'gatsby-theme-octahedroid/src/components/media-item';
import ImageSection from 'gatsby-theme-octahedroid/src/components/image-section';
import PageTitle from "gatsby-theme-octahedroid/src/components/page-title";
import BgSection from "gatsby-theme-octahedroid/src/components/background-section";
import Stats from 'gatsby-theme-octahedroid/src/components/stats';
import Testimonials from 'gatsby-theme-octahedroid/src/components/testimonials';
import PriceTable from 'gatsby-theme-octahedroid/src/components/price-table';
import Team from 'gatsby-theme-octahedroid/src/components/team';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Octahedroid starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <HeroCta 
        intro="Open-Source project"
        title="GatsbyJS Tailwind Starter with Theme-UI"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        link="http://google.com"
        ctaText="Click now!"
        imageName="hero.png"
      />
      <div className="container mx-auto my-5">
      <Title as="h1">H1 title</Title>
      <Title as="h2">H2 title</Title>
      <Title as="h3">H3 title</Title>
      <Title as="h4">H4 title</Title>
      <Title as="h5">H5 title</Title>
      <Title as="h6">H6 title</Title>
      <div className="flex flex-wrap my-4">
        <div className="w-full lg:w-1/3">
          <MediaItem image="hero.png" title="Media item for feed or feature" content="use this for features or feed items, supports image on left and right" />
        </div>
        <div className="w-full lg:w-1/3">
          <MediaItem link="/" image="hero.png" title="Media item 2 with link for feed or feature" content="use this for features or feed items, supports image on left and right" />
        </div>
      </div>
      </div>
      <ImageSection 
        centered
        intro="Cum sociis natoque penatibus et magnis dis parturient montes," 
        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." 
        image="hero.png"
        imageClassName="w-full lg:w-2/3"
        />
      <BgSection image="hero.png" container hero>
        <PageTitle 
        intro="Cum sociis natoque penatibus et magnis dis parturient montes," 
        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." 
        centered />
      </BgSection>

      <BgSection image="hero.png" container screen containerClassName="bg-darkShade">
        <PageTitle 
        intro="Cum sociis natoque penatibus et magnis dis parturient montes," 
        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." 
        centered />
      </BgSection>

      <List
        title="List of Items 3 columns"
        columns={3}
        items={[
          {
            icon: <FaCss3 />,
            text: 'Item one'
          },
          {
            icon: <FaDrupal />,
            text: 'Item dos',
            link: '/'
          },
          {
            icon: <FaGithub />,
            text: 'Item 3'
          },
          {
            icon: <FaFortAwesomeAlt />,
            text: 'Item cuatro'
          },
          {
            icon: <FaDrupal />,
            text: 'Item mas largo pero no importa'
          },
          {
            icon: <FaEvernote />,
            text: 'Lista de cosas importantes'
          },
          {
            icon: <FaDev />,
            text: 'Mas informacion relevante'
          },
          {
            icon: <FaCss3 />,
            text: 'Drupal se puede'
          },
          {
            icon: <FaDev />,
            text: 'Que mas quiere'
          },
        ]}
      />
      
      <List
        title="List of Items 2 columns"
        columns={2}
        items={[
          {
            icon: <FaCss3 />,
            text: 'Item one'
          },
          {
            icon: <FaDrupal />,
            text: 'Item dos',
            link: '/'
          },
          {
            icon: <FaGithub />,
            text: 'Item 3'
          },
          {
            icon: <FaFortAwesomeAlt />,
            text: 'Item cuatro'
          },
          {
            icon: <FaDrupal />,
            text: 'Item mas largo pero no importa'
          },
          {
            icon: <FaEvernote />,
            text: 'Lista de cosas importantes'
          },
          {
            icon: <FaDev />,
            text: 'Mas informacion relevante'
          },
          {
            icon: <FaCss3 />,
            text: 'Drupal se puede'
          },
          {
            icon: <FaDev />,
            text: 'Que mas quiere'
          },
        ]}
      />
      <Stats
      title="Statistics 3 columns"
      columns={3}
      items={[
        {
          stat: '10M',
          title: 'Views',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        },
        {
          stat: '100%',
          title: 'Remote',
          text: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
          
        },
        {
          stat: '3',
          title: 'Seconds',
          text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        },
      ]} />
      <CardGroup
        title="Card group 3 columns"
        columns={3}
        items={[
          {
            intro: 'Something awesome',
            image: <Coding className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'Let\'s code something now',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            link: '/',
            ctaText: 'Hire us now!',
            ctaButton: true
          },
          {
            image: <CodeThinking className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'We are hiring',
            text: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            link: '/',
            ctaText: 'Contact us',
          },
          {
            intro: 'Awesome features',
            image: <FeaturesOverview className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'How is the process',
            text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            link: '/',
            ctaText: 'Watch now',
          },
        ]}
      />

      <CardGroup
        title="Card group 2 columns"
        columns={2}
        items={[
          {
            intro: 'Something awesome',
            image: <Coding className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'Let\'s code something now',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            link: '/',
            ctaText: 'Hire us now!',
            ctaButton: true
          },
          {
            intro: 'Awesome features',
            image: <FeaturesOverview className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'How is the process',
            text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            link: '/',
            ctaText: 'Watch now',
          },
        ]}
      />
      <TextBlock intro="Let me show you this" title="New big block of text">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        
        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        
        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
        
        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </TextBlock>
      <TextBlock title="New big block of text" centered>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        
        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        
        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
        
        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </TextBlock>
      <TextBlock intro="New big block of text" >
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        
        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        
        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
        
        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </TextBlock>
      <PriceTable 
        title="Products table"
        columns={3}
        items={[
          {
            name: 'Product 1',
            value: '0',
            currency: 'USD',
            features: [
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: 'Basic support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: 'Basic support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: 'Basic support'
              },
            ],
            ctaText: 'Buy now',
            link: '/',
          },
          {
            name: 'Product 2',
            featured: true,
            value: '50',
            currency: 'USD',
            features: [
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "accent",
                text: 'Full support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "accent",
                text: 'Full support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "accent",
                text: 'Full support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "accent",
                text: 'Full support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "accent",
                text: 'Full support'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "accent",
                text: 'Full support'
              },
            ],
            ctaText: 'Buy now',
            link: '/',
          },
          {
            name: 'Product 3',
            value: '100',
            currency: 'USD',
            features: [
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: 'All Previous items'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: '1-on-1 Calls'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: '1-on-1 Calls'
              },
              {
                icon: <FaChevronRight />,
                iconClassName: "text-md",
                iconColor: "primary",
                text: '1-on-1 Calls'
              },
            ],
            ctaText: 'Buy now',
            link: '/',
          },
        ]}
      
      />
      <ImageGroup 
        intro="Intro text here"
        title="People we work with i guess"
        imageSets={[
          {
            title: "Set one of icons",
            images: [
              {
                src: "hero.png",
                link: '/'
              },
              {
                src: "hero.png",
                link: '/'
              },
              {
                src: "hero.png",
              },
              {
                src: "hero.png",
                link: 'http://google.com'
              },
            ]
          },
          {
            title: "Set two of icons",
            images: [
              {
                src: "hero.png",
              },
              {
                src: "hero.png",
              },
              {
                src: "hero.png",
                link: '/'
              },
              {
                src: "hero.png",
                link: 'http://google.com'
              },
            ]
          },
        ]}
      />
      <Testimonials
      title="Testimonials"
      columns="3"
      items={[
        {
          quote: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."',
          name: 'Jane Doe',
          job: 'Marketing Advisor',
          bussiness: 'The Agency',
          avatar: 'person.jpg'
        },
        {
          quote: '"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."',
          name: 'Jane Doe',
          job: 'Influencer?',
          bussiness: 'Youtube',
          avatar: 'person.jpg'
        },
        {
          quote: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."',
          name: 'Jane Doe',
          job: 'Marketing Advisor',
          bussiness: 'The Agency',
          avatar: 'person.jpg'
        },
      ]} />
      <Accordion
        intro="Know more about us"
        title="Frequently Asked Questions"
        items={[
          {
            heading: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
          },
          {
            heading: 'Cum sociis natoque penatibus?',
            text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
          },
        ]}
      />
      <Team
        title="Our team"
        columns={4}
        items={[
          {
            name: 'Jane Doe',
            job: 'Marketing Advisor',
            avatar: 'person.jpg'
          },
          {
            name: 'Jane Doe',
            job: 'Influencer?',
            avatar: 'person.jpg'
          },
          {
            name: 'Jane Doe',
            job: 'Marketing Advisor',
            avatar: 'person.jpg'
          },
          {
            name: 'Jane Doe',
            job: 'Marketing Advisor',
            avatar: 'person.jpg'
          },
        ]}
      />
      <CtaBlock
      intro="Open-Source project"
      title="GatsbyJS Tailwind Starter"
      text="Octa - a simple landing page styled with tailwind and generated by GatsbyJS, Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps."
      link="/"
      ctaText="Click here"
    />
    <CtaBlock
      intro="Open-Source project"
      title="GatsbyJS Tailwind Starter"
      text="Octa - a simple landing page styled with tailwind and generated by GatsbyJS, Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps."
      link="/"
      ctaText="Click here"
      dark
    />
    </Layout>
  );
}

export default IndexPage;
