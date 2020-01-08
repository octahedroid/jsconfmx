import React from "react";
import Layout from "../components/layout";
import TextBlock from "gatsby-theme-jsconfmx/src/components/text-block";
import Card from "gatsby-theme-jsconfmx/src/components/card";
import Title from "gatsby-theme-jsconfmx/src/components/title";
import List from "gatsby-theme-jsconfmx/src/components/list";

const CoC = () => {
  return (
    <Layout title="Código de conducta">
      <Layout.Container className="px-5">
        <TextBlock centered>
          <TextBlock.Title className="text-secondary mb-3 ">
            Code of Conduct of JSConf Mexico
          </TextBlock.Title>
          <TextBlock.Text className="text-primary mb-4">
              All attendees, speakers, sponsors and volunteers at JSConf Mexico
              are required to agree with the following code of conduct.
              Organizers will enforce this code throughout the event. We are
              expecting coorporation from all participants to help ensuring a
              safe environment for everybody.
          </TextBlock.Text>
        </TextBlock>
        <Layout.Container padding="p-0" flex>
          <Layout.Column columns="5" className="py-3 px-3">
            <TextBlock>
              <TextBlock.Title className="text-secondary mb-3 ">
                Need help?
              </TextBlock.Title>
              <TextBlock.Text className="text-primary">
                Contact us!
              </TextBlock.Text>
              <TextBlock.Text className="text-primary">
                Twitter: @_nec
              </TextBlock.Text>
              <TextBlock.Text className="text-primary">
                Email: report@jsconf.mx
              </TextBlock.Text>
              <TextBlock.Text className="text-primary mb-4">
                Phone (MX): +52 999 - 999 - 99
              </TextBlock.Text>
              <TextBlock.Text className="text-primary mb-4">
                  Conference staff will be happy to help participants contact
                  hotel/venue security or local law enforcement, provide
                  escorts, or otherwise assist those experiencing harassment to
                  feel safe for the duration of the conference.
              </TextBlock.Text>
              <TextBlock.Text className="text-primary">
                We value your attendance.
              </TextBlock.Text>
            </TextBlock>
          </Layout.Column>
          <Layout.Column
            columns="7"
            className="bg-lightPrimary rounded-lg py-3 px-4"
          >
            <TextBlock>
              <TextBlock.Title className="text-secondary mb-3 ">
                Purpose of this document
              </TextBlock.Title>
              <TextBlock.Text className="text-primary mb-4">
                  JSConf Mexico is dedicated to providing a harassment-free
                  conference experience for everyone, regardless of gender,
                  sexual orientation, disability, physical appearance, body
                  size, race, or religion. We do not tolerate harassment of
                  conference participants in any form. Sexual language and
                  imagery is not appropriate for any conference venue, including
                  talks, workshops, parties, Twitter and other online media.
              </TextBlock.Text>
              <TextBlock.Text className="text-primary mb-4">
                  Conference participants violating these rules may be
                  sanctioned or expelled from the conference without a refund at
                  the discretion of the conference organizers.
              </TextBlock.Text>
              <TextBlock.Text className="text-primary mb-4">
                  Sponsors are also subject to the anti-harassment policy. In
                  particular, sponsors should not use sexualized images,
                  activities, or other material. Booth staff (including
                  volunteers) should not use sexualized
                  clothing/uniforms/costumes, or otherwise create a sexualized
                  environment.
              </TextBlock.Text>
            </TextBlock>
          </Layout.Column>
        </Layout.Container>
        <TextBlock>
          <TextBlock.Title className="text-secondary">
            Reporting
          </TextBlock.Title>
          <TextBlock.Text className="text-primary">
              If someone makes you or anyone else feel unsafe or unwelcome,
              please report it as soon as possible. If you see or hear someone
              do something, that might violate this Code of Conduct, please
              report it.
          </TextBlock.Text>
        </TextBlock>
        <TextBlock>
          <TextBlock.Text className="text-primary">
            You can make a personal report by:
          </TextBlock.Text>
        </TextBlock>
        <Card.Group>
          <Card className="w-1/3 p-3">
            <Card.Image
              src="mascara_morada.jpg"
              className="w-5 mx-auto mb-3 flex items-center justify-center"
            />
            <Card.Divider className="border-b-2 border-primary" />
            <Card.Text>
                Contacting a staff member, identified by our bright yellow
                tshirts with our logo on it.
            </Card.Text>
          </Card>
          <Card className="w-1/3 p-3">
            <Card.Image
              src="mascara_verde.jpg"
              className="w-5 mx-auto mb-3 flex items-center justify-center"
            />
            <Card.Divider className="border-b-2 border-success" />
            <Card.Text>
                Contacting a staff member, identified by our bright yellow
                tshirts with our logo on it.
            </Card.Text>
          </Card>
          <Card className="w-1/3 p-3">
            <Card.Image
              src="mascara_rosa.jpg"
              className="w-5 mx-auto mb-3 flex items-center justify-center"
            />
            <Card.Divider className="border-b-2 border-secondary" />
            <Card.Text>
                Contacting a staff member, identified by our bright yellow
                tshirts with our logo on it.
            </Card.Text>
          </Card>
        </Card.Group>
        <TextBlock bg="primary" className="p-4 ">
          <TextBlock.Text className=" text-white mb-3">
            <Title as="h3" className="text-white font-light mb-3">
              Enforcement
            </Title>
            Participants asked to stop any harassing behavior are expected to comply immediately.
          </TextBlock.Text>
          <TextBlock.Text className=" text-white mb-3">
              If a participant engages in harassing behaviour, event organisers
              retain the right to take any actions to keep the event a welcoming
              environment for all participants. This includes warning the
              offender or expulsion from the conference with no refund.
          </TextBlock.Text>
          <TextBlock.Text className=" text-white mb-3">
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
          </TextBlock.Text>
        </TextBlock>
        <TextBlock>
          <TextBlock.Title className="text-secondary">
            Harassment
          </TextBlock.Title>
          <TextBlock.Text className="text-primary">
            Harassment includes, but is not limited to:
          </TextBlock.Text>
        </TextBlock>
        <Layout.Container padding="p-0" flex>
          <Layout.Column columns="6" className="py-3 px-3">
            <List.Group>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                <List.Text className="w-11/12">
                  Verbal or written comments that reinforce social structures of
                  domination related to gender, gender identity and expression,
                  sexual orientation, disability, physical appearance, body
                  size, race, age, religion.
                </List.Text>
              </List.Item>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Sexual images in public spaces
              </List.Item>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Deliberate intimidation, stalking, or following
              </List.Item>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Harassing photography or recording
              </List.Item>
            </List.Group>
          </Layout.Column>
          <Layout.Column columns="6" className="py-3 px-3">
            <List.Group>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Sustained disruption of talks or other events
              </List.Item>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Inappropriate physical contact
              </List.Item>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Unwelcome sexual attention
              </List.Item>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Advocating for, or encouraging, any of the above behaviour
              </List.Item>
            </List.Group>
          </Layout.Column>
        </Layout.Container>
        <TextBlock>
          <TextBlock.Title className="text-secondary">
            Photo policy
          </TextBlock.Title>
          <TextBlock.Text className="text-primary">
              We will have colored lanyards for attendees to indicate their
              comfort level with being photographed:
          </TextBlock.Text>
        </TextBlock>
        <Layout.Container padding="p-0" flex className="mb-4">
          <Layout.Column columns="6" className="py-3 px-3">
            <List.Group>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Black means It's OK to take photographs
                (within the boundaries of the Code of Conduct)
              </List.Item>
            </List.Group>
          </Layout.Column>
          <Layout.Column columns="6" className="py-3 px-3">
            <List.Group>
              <List.Item>
                <List.ItemIcon className="text-primary" />
                Red means you should not take photos of someone,
                nor should you ask if you may
              </List.Item>
            </List.Group>
          </Layout.Column>
        </Layout.Container>
        <TextBlock bg="lightPrimary" className="p-4 mb-4">
          <TextBlock.Title className="text-secondary mb-3">
            Inclusive language
          </TextBlock.Title>
          <TextBlock.Text className=" text-primary mb-3">
              In our commitment to a harassment-free and inclusive environment
              we strongly believe it's important to pay attention to harmful
              language patterns
          </TextBlock.Text>
          <Layout.Container flex padding="p-0">
            <Layout.Column columns="6" className="pr-4">
              <TextBlock.Title as="h4" className="text-secondary mb-3">
                Ableism
              </TextBlock.Title>
              <TextBlock.Text className=" text-primary mb-3">
                  Words like "crazy", "dumb", "insane" or "lame" are examples of
                  ableist language, devaluating people who have physical or
                  mental disabilities. Its appearance often stems not from any
                  intentional desire to offend, but from our innate sense of
                  what it means to be normal. These words can be avoided by
                  using more fitting, clearer descriptions of what we want to
                  communicate. To find out more about ableism and replacement
                  terms please read this guide.
              </TextBlock.Text>
              <TextBlock.Text className=" text-primary mb-3">
                  To find out more about ableism and replacement terms please read this guide.
              </TextBlock.Text>
            </Layout.Column>
            <Layout.Column
              columns="6"
              className="pl-4 border-l-2 border-lightPrimary"
            >
              <TextBlock.Title as="h4" className="text-secondary mb-3">
                Sexism
              </TextBlock.Title>
              <TextBlock.Text className=" text-primary mb-3">
                  Using gendered terms like "dude" or "guys" to address a
                  mixed-gendered group of people contributes to furthering
                  exclusion of underrepresented individuals. We strongly advise
                  avoiding gendered pronouns as well as gendered terms.
              </TextBlock.Text>
              <TextBlock.Text className=" text-primary mb-3">
                  For more information please familiarise yourself with the Geek
                  Feminism wiki guide.
              </TextBlock.Text>
            </Layout.Column>
          </Layout.Container>
        </TextBlock>
        <TextBlock>
          <TextBlock.Title className="text-secondary">
            Attribution
          </TextBlock.Title>
          <TextBlock.Text className="text-primary">
              This Code of Conduct was based on JSConf EU, CSSConf / JSConf AU,
              The Geek Feminism wiki, the work of Valerie Aurora, WeAllJS, and
              Conference Code of Conduct.
          </TextBlock.Text>
        </TextBlock>
      </Layout.Container>
    </Layout>
  );
};

export default CoC;
