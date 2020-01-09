import React from "react";
import Layout from "../components/layout";
import TextBlock from "gatsby-theme-jsconfmx/src/components/text-block";
import Speaker from "gatsby-theme-jsconfmx/src/components/speaker";
import Title from "gatsby-theme-jsconfmx/src/components/title";
import Paragraph from "gatsby-theme-jsconfmx/src/components/paragraph";

const speakers = [
  {
    name: "John Doe",
    from: "Airbnb",
    image: "person.jpg"
  },
  {
    name: "Jane Doe",
    from: "Facebook",
    image: "person.jpg"
  },
  {
    name: "Jhon Wick",
    from: "Facebook",
    image: "person.jpg"
  },
  {},{},{}
]

const Speakers = () => {
  return (
    <Layout title="Speakers">
      <Layout.Container className="px-5">
        <TextBlock centered>
          <TextBlock.Title className="text-secondary mb-3 ">
            Speakers
          </TextBlock.Title>
          <TextBlock.Text className="text-primary mb-4">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident,sometimes on
            purpose (injected humour and the like).
          </TextBlock.Text>
        </TextBlock>
        <Speaker.Group>
          {speakers && speakers.map(speaker=>(
            <Speaker>
              <Speaker.Back/>
              {speaker.name&&<Speaker.Front>
                <Speaker.Image src={speaker.image} />
                <Speaker.Info>
                  <Title as="h5" color="white" className="">{speaker.name}</Title>
                  <Paragraph className="uppercase font-light text-white">{speaker.from}</Paragraph>
                </Speaker.Info>
              </Speaker.Front>}
            </Speaker>
          ))}
        </Speaker.Group>
      </Layout.Container>
    </Layout>
  );
};

export default Speakers;
