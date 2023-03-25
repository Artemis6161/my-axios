
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import DestinetionData from './destinetionData'
import "./destination.css"
const destination = () => {
  return (
    <div className='destination'>
      <h1>Papular Destinations</h1>
      <p>Tours give you the oppertunity to see a lot,within a time frame</p>
    <DestinetionData
    cname="first-des"
        heading="Taal Volcano, Batabgas"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sed orci et aliquet. Nunc mollis risus maximus ligula condimentum semper. Nunc dignissim porta tellus. Phasellus sed tortor nec nisi ullamcorper dignissim id ut mauris. Proin at auctor nunc. Cras ac diam at ligula sodales posuere sed eget elit. Etiam metus est, pulvinar nec magna eu, fringilla laoreet arcu. Sed eget ante interdum, cursus tellus aliquam, lobortis turpis. Morbi nunc nulla, gravida vel ante vel, sodales pellentesque erat. Sed vel tincidunt tortor. Sed vestibulum libero ex, nec aliquam arcu rhoncus a. Ut volutpat iaculis consectetur. Proin aliquet nisi at lacinia vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id ultrices ipsum. Aliquam sit amet ex molestie, pellentesque quam ac, volutpat tellus. Vestibulum ultrices ullamcorper lobortis. Sed dapibus, arcu et hendrerit convallis, urna ex mollis erat, ut scelerisque dui eros ut erat. Ut sit amet nibh at massa faucibus ullamcorper. Aliquam quis nibh sit amet diam porta cursus. Integer eget tempor nunc. Cras dapibus, purus vitae scelerisque elementum, lectus sem tincidunt diam, eget vulputate nisl massa in libero. Aliquam nec nibh in lorem faucibus vulputate."
img1={Mountain1}
img2={Mountain2}
    />
    <DestinetionData
     cname="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sed orci et aliquet. Nunc mollis risus maximus ligula condimentum semper. Nunc dignissim porta tellus. Phasellus sed tortor nec nisi ullamcorper dignissim id ut mauris. Proin at auctor nunc. Cras ac diam at ligula sodales posuere sed eget elit. Etiam metus est, pulvinar nec magna eu, fringilla laoreet arcu. Sed eget ante interdum, cursus tellus aliquam, lobortis turpis. Morbi nunc nulla, gravida vel ante vel, sodales pellentesque erat. Sed vel tincidunt tortor. Sed vestibulum libero ex, nec aliquam arcu rhoncus a. Ut volutpat iaculis consectetur. Proin aliquet nisi at lacinia vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id ultrices ipsum. Aliquam sit amet ex molestie, pellentesque quam ac, volutpat tellus. Vestibulum ultrices ullamcorper lobortis. Sed dapibus, arcu et hendrerit convallis, urna ex mollis erat, ut scelerisque dui eros ut erat. Ut sit amet nibh at massa faucibus ullamcorper. Aliquam quis nibh sit amet diam porta cursus. Integer eget tempor nunc. Cras dapibus, purus vitae scelerisque elementum, lectus sem tincidunt diam, eget vulputate nisl massa in libero. Aliquam nec nibh in lorem faucibus vulputate."
img1={Mountain3}
img2={Mountain4}
    />

</div>
  )
}

export default destination
