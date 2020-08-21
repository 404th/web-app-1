import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JumbotronJum from '../components/JumbotronJum'

const Home = () => {
  return (
    <div>
      <Navbar />
        <JumbotronJum title={'Home'} subtitle={'Build your future with us...'} />
        <div className='container'>
          <h1>Home</h1>
          <p>
            lorem asdsadaskljkk aksldjksldjkalj kjaskldjaskl jakl ka jkasljdkla jklas jkalsj dklasjdklasj dkl
            sdflkdslfksldfklsdjfklsdjfklsjdfkl jkls jksdljfsdk jk jfkls j lksj klsjd klfjsdklfjsdkljf kljs klfjsdklfjsdkljf
            sakmfsdklfmklsdfklsjd kl jsdklf jdskl jskdl jfklsd jklsdj fklsdjf klsdjflsdj klsjdf kljsd fkljds fklsjdfk ljsd
            fksdlf slkdfl;sdkf;l ksl;f klsd; kfl;sd kfl;sdkf
          </p>
          <p>
            lorem asdsadaskljkk aksldjksldjkalj kjaskldjaskl jakl ka jkasljdkla jklas jkalsj dklasjdklasj dkl
            sdflkdslfksldfklsdjfklsdjfklsjdfkl jkls jksdljfsdk jk jfkls j lksj klsjd klfjsdklfjsdkljf kljs klfjsdklfjsdkljf
            sakmfsdklfmklsdfklsjd kl jsdklf jdskl jskdl jfklsd jklsdj fklsdjf klsdjflsdj klsjdf kljsd fkljds fklsjdfk ljsd
            fksdlf slkdfl;sdkf;l ksl;f klsd; kfl;sd kfl;sdkf
          </p>
        </div>
      <Footer />
    </div>
  )
}

export default Home