import PageHeader from '@/common/components/page-header';
import Text from '@/libs/ui/components/text';
import MessagesService from '@/domains/messages/services/messages-service';
import { headers } from 'next/headers';
import MessageCardsList from '@/domains/wall/components/message-cards-list';
import Image from 'next/image';
import flagOnMoon from '@/assets/images/flag-on-moon.jpeg';

export default async function WallPage() {
  const messages = await MessagesService.fetchAll();

  return (
    <article className="mt-5">
      <PageHeader
        planet="Wall"
        title="Plant your flag!"
        className="container mb-2"
      />

      <section className="container">
        <div className="float-left mr-3 mb-3 lg:mr-4 lg:mb-4 w-40 h-28 relative">
          <Image
            src={flagOnMoon}
            fill
            alt="Apollo 11 mission, astronaut plating US flag on moon"
            className="object-cover rounded shadow-lg"
          />
        </div>
        <Text as="p" className="mb-3" type="paragraph">
          Like every good trip, now it&apos;s time for you to interact with what
          I&apos;m proposing, but before, giving you more context:{' '}
          <Text highlight>
            have you ever heard about &quot;The Facebook Wall&quot;?
          </Text>{' '}
          It&apos;s very nice! You can write any message there, and I created my
          version right here, so{' '}
          <Text highlight>
            feel free to post something for me or anyone else
          </Text>{' '}
          to read. It could be <Text highlight>inspirational</Text>,{' '}
          <Text highlight>some feedback</Text>, <Text highlight>kudos</Text>,{' '}
          <Text highlight>a reminder for (or from) the future</Text> or from the
          future, or <Text highlight>anything you want</Text> to share.
        </Text>
      </section>

      <MessageCardsList messages={messages} />
    </article>
  );
}
