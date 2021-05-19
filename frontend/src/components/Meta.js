import Helment from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helment>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helment>
  )
}

Meta.defaultProps = {
  title: 'Welcome to RobertShop',
  description: 'we sell all kinds of vintage material',
  keywords: 'T-shirts, polo, shoes, up, down, cheap vintage',
}

export default Meta
