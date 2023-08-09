import { shuffle } from 'lodash';

export function prepareTypewriterMultiPhrases(
  firstPhrase: string,
  otherPhrases: string[]
) {
  return {
    options: { cursor: '_', delay: 60 },
    onInit: (typewriter: any) => {
      let codeTypewriter = typewriter;

      shuffle(otherPhrases).forEach((phrase) => {
        codeTypewriter = typewriter
          .typeString(`${phrase} `)
          .pauseFor(700)
          .deleteAll();
      });

      codeTypewriter.typeString(`${firstPhrase} `).start();
    },
  };
}
