import { cac } from 'cac';
import inquirer, { QuestionCollection, Separator } from 'inquirer';
const cli = cac('sample_cli');

const questions: QuestionCollection = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'checkbox',
    name: 'checks',
    message: 'select your style!',
    choices: [
      new Separator(' == Choice A'),
      {
        name: 'hoge',
      },
      {
        name: 'fuga',
      },
      {
        name: 'piyo',
      },
    ],
  },
];

cli
  .command('', 'generate sample stack')
  .example('')
  .action(async () => {
    const name = await inquirer.prompt(questions);
    console.log(name);
  });

cli.parse();
