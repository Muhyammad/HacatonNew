import './App.css'
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header_div">
          <ul className="headbar1">
            <li id="ul1_li1">
              {' '}
              <a href="Search">Search</a>
            </li>
            <li id="ul1_li2">
              <a href="">Language</a>
            </li>
            <li id="ul1_li3">Вертуальный Музей</li>
            <li id="ul1_li4">
              <a href="">tikets</a>
            </li>
          </ul>

          <hr />

          <ul className="header2">
            <li id="ul2_li1">
              <a href="">VISIT</a>
            </li>
            <li id="ul2_li2">
              <a href="">EXHIBITIONS AND EVENTS</a>
            </li>
            <li id="ul2_li3">
              <a href="">EXPLORE</a>
            </li>
            <li>|</li>
            <li id="ul2_li4">
              <a href="">SEE MORE</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="main-div">
        {/* <div>
          <p>Online tours =</p>
        </div> */}
        <h2>
          VIRTUAL TOURS <br />
          Enjoy the Mmuseum at home!
        </h2>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Living_Computer_Museum_pano_01.jpg/2000px-Living_Computer_Museum_pano_01.jpg"
          alt="нету"
        />
      </div>
      <div className="div_">
        <ul className="ul-div">
          <li >
            <a href="#">Virtual tours</a>
          </li>
          <li>
            <a href="#">Museum at home</a>
          </li>
        </ul>
      </div>

      <div className="main_content">
        <ul>
          <li>
            <div className="div_in_ul">
              <div>
                <p className="p_in_div">
                  Visit the museum rooms and galeries,
                  <br /> admire the palace architecture and enjoy the views!
                </p>
                <div>
                  <img
                    className="img_in_p"
                    src="https://avatars.mds.yandex.net/i?id=eeb86ce1e43d86f38703a5e12dea701f_l-5406816-images-thumbs&n=13"
                    alt=""
                  />
                </div>
                <div className="block_vidio">
                  <ReactPlayer url="https://youtu.be/gvub189tBwc" />
                </div>
              </div>

              <div className="div_in_div">
                <ul>
                  <li className="block_text">
                    <li>
                      <img
                        id="img1"
                        src="https://dots-map.com/wp-content/uploads/2023/01/f56e1b9f-922c-47cf-afb1-172b062d6b79_rw_1920.webp"
                        alt=""
                      />
                    </li>
                    <li className="text_main">
                      <h3>Музей техники Apple в Москве</h3>
                      <p>
                        Здесь можно не только послушать лекцию, но и все
                        потрогать, опробовать технику в работе. Есть и, своего
                        рода, сервис-центр, в котором можно даже отремонтировать
                        или собрать Macintosh 1984 — 1997 гг выпуска,
                        перезаписать электронную информацию с устаревших
                        носителей на современные.
                      </p>
                      <br />
                      <a className="a_a" href="#">
                        Launch virtual tour
                      </a>
                    </li>
                  </li>
                  <li className="block_text">
                    <li>
                      <img
                        id="img2"
                        src="https://avatars.mds.yandex.net/i?id=6fbfc4a71dd10658b08b933011ffbaca64b480321fbff431-12650537-images-thumbs&n=13"
                        alt=""
                      />
                    </li>
                    <li className="text_main">
                      <h3>
                        Центральный музей связи им. Попова А. С. в
                        Санкт-Петербурге
                      </h3>
                      <p>
                        Один из старейших научно-технических музеев мира,
                        основанный в 1872 году. Уникальную коллекцию музея
                        составляют экспонаты по истории почтовой, телеграфной и
                        телефонной связи, радиосвязи и радиовещания,
                        телевидения, мобильной, космической и спутниковой связи.
                      </p>
                
                      <a className="a_a" href="#">
                        Launch virtual tour
                      </a>
                    </li>
                  </li>

                  <li className="block_text">
                    <li>
                      <img
                        id="img3"
                        src="https://avatars.mds.yandex.net/i?id=bf51277e36b8c6cc58453e6eddd2ace1f8eaaf07-8491909-images-thumbs&n=13"
                        alt=""
                      />
                    </li>
                    <li className="text_main">
                      <h3>Инновационный центр «Сколково»</h3>
                      <p>Каких только экскурсий здесь нет, в том числе и экскурсии в самый большой технопарк Европы! Лекции мега-мозгов со всего мира и обучение в Международной гимназии. 
                      Вы можете окунуться в один из самых грандиозных проектов современности, где живут умные машины и механизмы.
                      </p>
                      <br />
                  
                      <a className="a_a" href="#">
                        Launch virtual tour
                      </a>
                    </li>
                  </li>
                  <li className="block_text">
                    <li>
                      <img
                        id="img4"
                        src="https://avatars.mds.yandex.net/i?id=3426b6819493b84e518411a3dad1573974619258-5383794-images-thumbs&n=13"
                        alt=""
                      />
                    </li>
                    <li className="text_main">
                      <h3>Музей Яндекса в Москве</h3>
                      <p>Экспозиция музея представляет собой коллекцию компьютеров и рабочих станций. Ее основу составляет техника советского производства из коллекции Виктора Боева, дополнена и западными образцами.
                      Площадка совмещает сразу два проекта компании — музей техники и магазин, где можно приобрести различные товары с символикой Яндекса.
                      </p>
                  
                 
                      <a className="a_a" href="#">
                        Launch virtual tour
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <footer className="footer">
        <div className="footer">
          <div>
            <p className="footer_p">
              Cайт разработан для участия в хакаоне по 3Д моделированию и
              предостовляет собой возможность посмотреть музей без VR
            </p>
          </div>
          <div className="">
            <ul className="ul_ico">
              <li>
                <a href="">
                  <img
                    className="ico"
                    src="social_youtube_23.png"
                    alt="asdasd"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="ico"
                    src="social_facebook_fb_35.png"
                    alt="sadasd"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="ico"
                    src="whatsapp_black_logo_icon_147050.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
