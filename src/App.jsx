import './App.css'
import Button from './components/Button'
import Image from './components/Image'

function App() {

  return (
    <main style={{ maxWidth: '1600px', margin: 'auto' }}>

      {/* header */}
      <header style={{ padding: "15px", paddingLeft: '12px', paddingRight: '12px', borderBottom: '2px solid #F3F4F7' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <aside style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ display: "flex", alignItems: 'center', gap: '10px' }}>
              <button style={{ width: '12px', height: '12px', borderRadius: "50%", background: "#F35050", border: 'none' }} />
              <button style={{ width: '12px', height: '12px', borderRadius: "50%", background: "#F3CC65", border: 'none' }} />
              <button style={{ width: '12px', height: '12px', borderRadius: "50%", background: "#5CC02A", border: 'none' }} />
            </div>
            <img src="src/assets/arrow_left_right.svg" alt="leftRight" />
          </aside>
          <aside style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ border: '1px solid #A3ADBF', width: '285px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '5px', paddingLeft: '10px', paddingTop: '5px', paddingBottom: '5px' }}>
              <img src="src/assets/.svg" alt="search" />
              <input type="search" class='search' placeholder='Search' style={{ border: 'none', fontSize: '18px' }} />
            </div>
            <img src="src/assets/icon_info.svg" alt="" />
          </aside>
        </nav>
      </header>

      {/* main */}
      <main class='main'>
        {/* sections */}

        {/* sec 1  */}
        <section style={{ background: '#F8FAFC', paddingTop: '20px', paddingBottom: '20px' }} class='sec1'>

          <aside class='aside1'>
            {/* div 1 */}
            <div style={{ borderRadius: '8px', border: '2px solid #EEF2F6', width: '55px', height: '55px' }}>
              <div style={{ borderRadius: '6px', border: '2px solid #fff', width: '52px', height: '52px' }}>
                <div style={{ background: '#EEF2F6', borderRadius: '4px', height: '49px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="src/assets/main/ (1).svg" />
                </div>
              </div>
            </div>

            {/* div 2 */}
            <div style={{ borderRadius: '8px', border: '2px solid #DAEDFA', width: '55px', height: '55px' }}>
              <div style={{ borderRadius: '6px', border: '2px solid #1B9FFC', width: '52px', height: '52px' }}>
                <div style={{ background: '#EEF2F6', borderRadius: '4px', height: '49px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="src/assets/main/.svg" />
                </div>
              </div>
            </div>

            <hr style={{ border: '1px solid #EEF2F6', width: '55px' }} />

            {/* div 3 */}
            <div style={{ background: '#DAEDFA', padding: '1.5px', borderRadius: '8px', width: '55px', height: '55px' }}>
              <img src="src/assets/main/Foto 40x40.svg" style={{ width: '52px', height: '52px' }} />
            </div>

            {/* div 4 */}
            <div style={{ background: '#DAEDFA', padding: '1.5px', borderRadius: '8px', width: '55px', height: '55px' }}>
              <img src="src/assets/main/Avatar 40x40 (5).svg" style={{ width: '52px', height: '52px' }} />
            </div>

            {/* div 5 */}
            <div style={{ background: '#EEF2F6', padding: '1.5px', borderRadius: '8px', width: '55px', height: '55px' }}>
              <div style={{ background: '#fff', padding: '1.5px', height: '52px', borderRadius: '8px' }}>
                <img src="src/assets/main/Avatar 40x40 (2).svg" style={{ width: '49px', height: '49px' }} />
              </div>
            </div>

            {/* div 6 */}
            <div style={{ background: '#EEF2F6', padding: '1.5px', borderRadius: '8px', width: '55px', height: '55px' }}>
              <div style={{ background: '#fff', padding: '1.5px', height: '52px', borderRadius: '8px' }}>
                <img src="src/assets/main/Avatar 40x40 (3).svg" style={{ width: '49px', height: '49px' }} />
              </div>
            </div>

            {/* div 7*/}
            <div style={{ background: '#EEF2F6', padding: '1.5px', borderRadius: '8px', width: '55px', height: '55px' }}>
              <div style={{ background: '#fff', padding: '1.5px', height: '52px', borderRadius: '8px' }}>
                <img src="src/assets/main/Avatar 40x40 (4).svg" style={{ width: '49px', height: '49px' }} />
              </div>
            </div>

            {/* div 8 */}
            <div style={{ borderRadius: '8px', border: '2px solid #EEF2F6', width: '55px', height: '55px' }}>
              <div style={{ borderRadius: '6px', border: '2px solid #fff', width: '52px', height: '52px' }}>
                <div style={{ background: '#EEF2F6', borderRadius: '4px', height: '49px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="src/assets/main/.svg" />
                </div>
              </div>
            </div>

          </aside>

          <aside class='profile'>
            <div style={{ position: 'relative' }}>
              <img src="src/assets/main/Ellipse (1).svg" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '2px solid green' }} />
              <div style={{ position: 'absolute', bottom: '45px', right: '1px', background: 'red', width: '15px', height: '15px', borderRadius: '50%', border: '2px solid white' }} />
            </div>
          </aside>

        </section>


        {/* sec 2 */}
        <section style={{ padding: '20px', borderRight: '2px solid #EEF2F6' }}>
          <section style={{ padding: '15px' }}>

            <aside style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h1 style={{ fontSize: '24px' }}>Messages</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src="src/assets/.svg" alt="search" />
                <img src="src/assets/main/.svg" alt="more" />
              </div>
            </aside>

            <aside style={{ paddingTop: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                  <button style={{ border: 'none', background: 'none', borderBottom: '2px solid #1B9FFC', color: '#1B9FFC', fontWeight: '500', fontSize: '17px' }}>All Chats</button>
                  <p style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'red' }} />
                </div>
                <button style={{ border: 'none', background: 'none', borderBottom: '2px solid #EDEFF3', color: '#8592AA', fontWeight: '500', fontSize: '17px' }}>New</button>
                <button style={{ border: 'none', background: 'none', borderBottom: '2px solid #EDEFF3', color: '#8592AA', fontWeight: '500', fontSize: '17px' }}>Friends</button>
              </div>
            </aside>

            <aside style={{ paddingTop: '30px' }}>
              <aside style={{ display: 'flex', alignItems: 'start', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '10px', alignItems: 'center' }}>
                  <img src="src/assets/main/section/community image.svg" alt="" />
                  <p style={{ fontSize: '18px' }}>Community questions</p>
                </div>
                <img src="src/assets/main/section/.svg" alt="" />
              </aside>

              <div style={{ display: 'flex', fontSize: '18px', flexDirection: 'column', gap: '10px', paddingLeft: '36px', paddingTop: '10px' }}>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Collection of Technical In...
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ border: 'none', display: 'flex', alignItems: 'center', padding: '4px', background: '#F3F4F7', borderRadius: '4px', paddingLeft: '4px', paddingRight: '4px' }}><img src="src/assets/main/section/.svg" alt="" /></button>
                    <button style={{ border: 'none', color: '#fff', display: 'flex', alignItems: 'center', padding: '4px', background: '#F35050', borderRadius: '4px', paddingLeft: '4px', paddingRight: '4px', fontSize: '9px' }}>17</button>
                  </div>
                </p>
                <p>Synchronous Readline fo...</p>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Collection of Technical In...
                  <button style={{ border: 'none', color: '#fff', display: 'flex', alignItems: 'center', padding: '4px', background: '#F35050', borderRadius: '4px', paddingLeft: '7px', paddingRight: '7px', fontSize: '9px' }}>4</button>
                </p>
                <p>What are some of the differe... </p>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Aptitude Practice Questions
                  <button style={{ border: 'none', display: 'flex', alignItems: 'center', padding: '4px', background: '#F3F4F7', borderRadius: '4px', paddingLeft: '4px', paddingRight: '4px' }}><img src="src/assets/main/section/.svg" alt="" /></button>
                </p>
                <p style={{ color: '#8592AA' }}>More</p>
              </div>
            </aside>

            <aside style={{ paddingTop: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>

              {/* d1 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/foto.svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                    <button style={{ position: 'absolute', bottom: '20px', right: '-10px', color: '#8592AA', background: '#EEF2F6', padding: '3px', fontSize: '6px', borderRadius: '50%', border: '2px solid white' }}>+55</button>
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>Group 2</h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>Thanks again you have been... </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: "end", flexDirection: 'column', gap: '3px' }}>
                  <p style={{ fontSize: '14px', color: '#616161' }}>4:31 PM</p>
                  <button style={{ border: 'none', color: '#fff', display: 'flex', alignItems: 'center', padding: '4px', background: '#F35050', borderRadius: '4px', paddingLeft: '4px', paddingRight: '4px', fontSize: '9px' }}>99</button>
                </div>

              </div>

              {/* d2 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/Ellipse 2.svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                    <button style={{ position: 'absolute', bottom: '5px', right: '-3px', color: '#8592AA', background: 'green', padding: '5px', fontSize: '7px', borderRadius: '50%', border: '2px solid white' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '5px' }}>
                    <h1 style={{ fontWeight: '600' }}>Gloriya Niyozova </h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>https://unsplash.com/s/photos/U... </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '14px', color: '#616161' }}>15 min ago</p>
                </div>

              </div>

              {/* d3 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/Rectangle 523.svg" style={{ width: '35px', height: '35px', borderRadius: '8px' }} />
                    <div class='divRad' style={{ position: 'absolute', display: "flex", alignItems: 'center', justifyContent: 'center', bottom: '3.5px', marginRight: '-10px', padding: '2px', right: '10px', color: '#8592AA', background: '#F3F4F7' }}>
                      <img src="src/assets/main/avatar/.svg" />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>~Art~ King</h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>welcom - Art_king, opublic...</p>
                  </div>
                </div>

                <div>
                  <img src="src/assets/main/.svg" alt="more" />
                </div>

              </div>


              {/* d4 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/foto (1).svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '10px' }}>
                    <h1 style={{ fontWeight: '600' }}>Bernd Ottovordemgentsc... </h1>
                    <img src="src/assets/write.svg" alt="" />
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '14px', color: '#616161' }}>3:35 PM</p>
                </div>

              </div>


              {/* d5 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/foto (2).svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                    <button style={{ position: 'absolute', bottom: '25px', right: '-5px', color: '#8592AA', background: '#EEF2F6', padding: '3px', fontSize: '7px', borderRadius: '50%', border: '2px solid white' }}>+1</button>
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>Group 2</h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>Thanks again you have been... </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: "end", flexDirection: 'column', gap: '3px' }}>
                  <p style={{ fontSize: '14px', color: '#616161' }}>4:31 PM</p>
                  <button style={{ border: 'none', color: '#fff', display: 'flex', alignItems: 'center', padding: '4px', background: '#F35050', borderRadius: '4px', paddingLeft: '6px', paddingRight: '6px', fontSize: '9px' }}>5</button>
                </div>

              </div>

              {/* d6 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/Ellipse 2 (1).svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                    <button style={{ position: 'absolute', bottom: '5px', right: '-3px', color: '#8592AA', background: 'green', padding: '5px', fontSize: '7px', borderRadius: '50%', border: '2px solid white' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>Tahmina Usmonalieva </h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>Image </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '14px', color: '#616161' }}>3:35 PM</p>
                </div>

              </div>

              {/* d7 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#FFB856' }}>
                      <p style={{ color: '#fff', fontWeight: '600', fontSize: '18px' }}>P</p>
                    </div>
                    <div class='divRad' style={{ position: 'absolute', display: "flex", alignItems: 'center', justifyContent: 'center', bottom: '-0.1px', marginRight: '-10px', padding: '2px', right: '10px', color: '#8592AA', background: '#F3F4F7' }}>
                      <img src="src/assets/main/avatar/.svg" />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>~Art~ King</h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>welcom - Art_king, opublic...</p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '14px', color: '#616161' }}>Feb  28</p>
                </div>

              </div>

              {/* d8 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/Ellipse 2 (2).svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                    <button style={{ position: 'absolute', bottom: '5px', right: '-3px', color: '#8592AA', background: 'green', padding: '5px', fontSize: '7px', borderRadius: '50%', border: '2px solid white' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>James Smith </h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>Thanks again you have been...     </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '14px', color: '#616161' }}>3:35 AM</p>
                </div>

              </div>

              {/* d9 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div>
                    <img src="src/assets/main/avatar/foto (3).svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>James Smith </h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>Video</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: "end", flexDirection: 'column', gap: '5px' }}>
                  <p style={{ fontSize: '14px', color: '#616161' }}>4:31 PM</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ border: 'none', display: 'flex', alignItems: 'center', padding: '4px', background: '#F3F4F7', borderRadius: '4px', paddingLeft: '4px', paddingRight: '4px' }}><img src="src/assets/main/section/.svg" alt="" /></button>
                    <button style={{ border: 'none', color: '#fff', display: 'flex', alignItems: 'center', padding: '4px', background: '#F35050', borderRadius: '4px', paddingLeft: '4px', paddingRight: '4px', fontSize: '9px' }}>17</button>
                  </div>
                </div>

              </div>


              {/* d10 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="src/assets/main/avatar/Ellipse 2 (3).svg" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                    <button style={{ position: 'absolute', bottom: '5px', right: '-3px', color: '#8592AA', background: 'green', padding: '5px', fontSize: '7px', borderRadius: '50%', border: '2px solid white' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: "start", flexDirection: 'column', gap: '3px' }}>
                    <h1 style={{ fontWeight: '600' }}>Grace King </h1>
                    <p style={{ fontSize: '14px', color: '#616161' }}>Thanks again you have been...    </p>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '14px', color: '#616161' }}>Feb  28</p>
                </div>

              </div>


            </aside>


          </section>
        </section>

        {/* sec 3 */}
        <section style={{ borderRight: '2px solid #EEF2F6' }}>

          <aside style={{ borderBottom: '2px solid #EEF2F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '600', display: 'flex', gap: '10px' }}><img src="src/assets/main/avatar/.svg" alt="" />
                Oscar-winning director Jimmy Chin on fear, risk ...
              </h1>
              <p style={{ color: '#8592AA' }}>News in #global-news from Yakdu Workspace</p>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src="src/assets/main/.svg" alt="more" />
              <hr style={{ border: '1px solid #EEF2F6', height: '25px', borderRadius: '2px' }} />
              <img src="src/assets/main/Group 427.svg" alt="" />
            </div>
          </aside>

          <aside style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '20px', fontWeight: '400', fontSize: '18px' }}>
              <img src="src/assets/Rectangle 33.svg" />
              <p>As a film director and National Geographic photographer, Chin has assembled a world-class portfolio of work. This year he returned from a trip to Antarctica, where he and a team of adventurers skied two new routes down the tallest and second-tallest peaks on the continent.</p>
              <p>But such a life wasn’t always the plan.</p>
              <p>As a child growing up in rural Minnesota, Chin was encouraged to pursue more traditional aspirations: excelling academically, as well as in martial arts and as a competitive swimmer.</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button style={{ borderRadius: '3px', border: 'none', padding: '5px', paddingBottom: '2px', paddingTop: '2px', color: '#fff', background: '#FE9B71' }}>documentation</button>
              <button style={{ borderRadius: '3px', border: 'none', padding: '5px', paddingBottom: '2px', paddingTop: '2px', color: '#fff', background: '#5DABCD' }}>requires triage</button>
              <button style={{ borderRadius: '3px', border: 'none', padding: '5px', paddingBottom: '2px', paddingTop: '2px', color: '#fff', background: '#BD5DCD' }}>documentation</button>
              <button style={{ borderRadius: '3px', border: 'none', padding: '5px', paddingBottom: '2px', paddingTop: '2px', color: '#fff', background: '#5CC02A' }}>requires triage</button>
            </div>
          </aside>

          <aside style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

              <button style={{ background: '#EDEFF3', border: 'none', display: 'flex', alignItems: "center", gap: '10px', borderRadius: '5px', padding: '2px 10px' }}>
                <img src="src/assets/.svg" alt="" />
                <p style={{ color: '#616161' }}>6</p>
                <img src="src/assets/main/.svg" alt="" />
              </button>

              <button style={{ background: '#EDEFF3', border: 'none', display: 'flex', alignItems: "center", gap: '10px', borderRadius: '15px', padding: '2px 5px' }}>
                <p style={{ color: '#616161' }}>😘12</p>
              </button>

              <button style={{ background: '#65b5ee13', border: '1px solid #1B9FFC', display: 'flex', alignItems: "center", gap: '10px', borderRadius: '15px', padding: '2px 5px' }}>
                <p style={{ color: '#1B9FFC' }}>😠12</p>
              </button>

              <button style={{ background: '#EDEFF3', border: '1px solid #D9DFE7', display: 'flex', alignItems: "center", gap: '10px', borderRadius: '15px', padding: '2px 5px' }}>
                <p style={{ color: '#616161' }}>😘2</p>
              </button>

              <img src="src/assets/add_icon.svg" alt="add_Icon" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p style={{color: '#8592AA'}}> <img src=" src/assets/.svg" alt="" /> 15 comments</p>
              <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px' }}> <img src="src/assets/Ellipse (2).svg" alt="" />Laura JI <p style={{color: '#616161', fontWeight: '400'}}>Feb 30, 23:34</p></h1>
            </div>

          </aside>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 0px' }}>
            <h1>No comments yet.</h1>
            <p>Send a answer or reply with a greeting sticker below!</p>
          </div>

          <div style={{ background: '#F8FAFC', padding: '15px', borderRadius: '8px', margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ color: '#A3ADBF', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '15px' }}><img src="src/assets/ (1).svg" alt="" />Write a message</p>
            <p style={{ color: '#A3ADBF', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              Aa
              <p>@</p>
              <img src="src/assets/.svg" alt="" />
              <img src="src/assets/Group 42.svg" alt="" />
              <img src="src/assets/.svg" alt="" />
            </p>
          </div>

        </section>


        {/* sec 4 */}
        <section style={{ padding: '20px' }}>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1>RELATED</h1>
            <Button btn={47} p={"merging 2 nested object in javascript"} />
            <Button btn={11} p={"Merging objects of an array using lodash"} />
            <Button btn={7} p={"Merge nested array in object in Javascript"} />
            <Button btn={47} p={"Merge objects containg array of objects"} />
          </aside>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '20px' }}>
            <h1>LINKS</h1>
            <Image btn={"src/assets/Rectangle 105.svg"} p={'Marching Cubes generating holes in mesh'} />
            <Image btn={"src/assets/image_link.svg"} p={'Create variable in Kepserver with Node-OPCUA'} />
            <Image btn={"src/assets/Rectangle 105 (1).svg"} p={'Marching Cubes generating holes in meshh'} />
            <Image btn={"src/assets/Rectangle 105 (3).svg"} p={'InterruptedException when debugging Android app'} />
          </aside>

        </section>
      </main>

    </main>
  )
}

export default App
