import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
const About = () => {
  return (
    <>
        <Head>
            <title>Dictionary | About</title>
        </Head>
        <style jsx>
            {
                `
                    .about {
                        display : flex;
                        flex-direction : column;
                        width : 100%;
                        max-width : 85%;
                        margin: 0 auto;
                        padding: 20px 0;
                        align-items : flex-start;
                        justify-content : center;
                    }
                    .abouthead{
                        color: black;
                    }
                    .line{
                        width: 100%;
                        max-width: 70px;
                        height: 2px;
                        margin: 10px 0;
                        background-color: black;
                    }
                    .aboutpara{
                        margin: 10px 0;                        
                    }
                `
            }
        </style>
        <div className="about">
            <h1 className='abouthead'>About</h1>
            <div className='line'></div>
            <p className='aboutpara'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe, sed cupiditate rerum unde modi velit perferendis aliquam nulla dolores repellat voluptates error mollitia repellendus dolorum sequi nisi autem magni. Perspiciatis quaerat nisi nostrum est quo ea repellendus, ipsam voluptatibus deserunt libero nam eum minus quam explicabo, blanditiis dolorem illum fugit voluptas veniam eius? Neque voluptatem voluptates impedit vitae animi qui reprehenderit veritatis cumque minima atque assumenda sint possimus consequatur deserunt provident fuga, quam aut dignissimos eaque! In numquam commodi deserunt et eius voluptatum quo sunt unde veritatis nesciunt mollitia rerum voluptates perferendis est, reiciendis inventore delectus dolorem placeat. Accusamus eius, fugit, fugiat vel assumenda deserunt minima at aut, odio quam facere nostrum dolorem libero corrupti modi molestias veritatis earum? Omnis nihil accusantium laudantium libero odio neque fuga ullam cupiditate, corrupti officia quis saepe dolore, dicta optio. Cum eius reiciendis alias nemo deserunt. Aperiam sint, assumenda, vitae nulla error tenetur soluta necessitatibus animi excepturi doloribus consectetur iste voluptas sequi? Fugit totam cumque deleniti, vero praesentium rerum voluptatibus ea. Explicabo perspiciatis magni quas minus recusandae! Inventore voluptas facere cumque sed repudiandae autem non sit quis possimus fuga mollitia, vero libero dolorum, quas tempora ratione et obcaecati distinctio quia. Minus, distinctio sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos assumenda architecto molestias nobis praesentium minus ipsa, fugiat velit ipsum delectus perspiciatis quisquam cumque perferendis! A ab quae quasi nam accusamus porro commodi dolores recusandae eligendi aliquid quaerat perspiciatis neque modi nisi labore, obcaecati corrupti, doloremque omnis molestiae. Dolorem quod ratione eum distinctio sapiente, iusto quas, sequi nemo nesciunt, illum inventore vero accusantium ipsa in ullam laudantium eveniet quibusdam amet consequuntur commodi eius libero! Quam corrupti velit dicta alias aperiam magni. Esse inventore vero nam veniam, maxime atque accusamus optio rerum vel, magni non quisquam tempore assumenda sint nobis repellat, consequuntur doloremque qui molestias? Animi beatae quia tempore suscipit, ea ducimus impedit sed? Magni similique eius ea reprehenderit? Quos, vel necessitatibus! Eum, ullam nostrum iusto omnis autem dolor nihil voluptatem minima modi, totam quae placeat neque praesentium perspiciatis officiis odit atque quibusdam. Totam voluptates cum adipisci impedit aliquam suscipit tempore, harum alias expedita ratione exercitationem odit laudantium mollitia soluta autem, pariatur consequatur natus vel, ab voluptatibus. Quidem delectus ullam tempore tenetur suscipit beatae impedit reiciendis nesciunt. Corporis aperiam voluptate consequuntur aspernatur repudiandae eum tempora laborum, inventore unde mollitia, velit voluptas esse tenetur architecto rem dolore molestias assumenda minima nesciunt. Voluptate, quasi.
            </p>
        </div>
    </>
  )
}

export default About