import { Accordion, AccordionItem } from '../components/ui/Accordion'

const FAQ = [
  {
    question: 'Combien coûte la création d\'un site web ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site ?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Est-ce que je peux modifier mon site moi-même après la livraison ?',
    answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
  },
  {
    question: 'Proposez-vous un accompagnement après la mise en ligne ?',
    answer: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.',
  },
  {
    question: 'Travaillez-vous avec des clients en dehors de la France ?',
    answer: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
  },
]

export default function FaqPage() {
  return (
    <section className="section section--dark">
      <div className="section-inner">
        <h1 className="section-title">Questions fréquentes</h1>
        <Accordion>
          {FAQ.map(({ question, answer }) => (
            <AccordionItem key={question} question={question}>
              <p>{answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
