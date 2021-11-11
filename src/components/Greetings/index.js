export const Greetings = ({ lang, children }) => {

  const greet = (lang) => {
    switch (lang) {
      case 'de':
        return `Hallo ${children}`

      case 'fr':
        return `Bonjour ${children}`

      case 'es':
        return `Hola ${children}`

      case 'en':
        return `Hello ${children}`

      default:
        break
    }
  }

  return (
    <div>
      {greet(lang)}
      {/* {
        {
          'de': `Hallo ${children}`,
          'fr': `Bonjour ${children}`,
          'es': `Hola ${children}`,
          'en': `Hello ${children}`

        }[lang]
      } */}
    </div>
  )
}
