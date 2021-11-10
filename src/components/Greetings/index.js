export const Greetings = ({ lang, children }) => {

  return (
    <div>
      {
        {
          'de': `Hallo ${children}`,
          'fr': `Bonjour ${children}`,
          'es': `Hola ${children}`,
          'en': `Hello ${children}`
        }[lang]
      }
    </div>
  )
}
