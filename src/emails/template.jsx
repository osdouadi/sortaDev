import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function template({ message, senderName, senderEmail, senderPhone }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your personal site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from {senderName}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
              <Text>The sender's phone is: {senderPhone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
