import FideInSection from "../layouts/FadeInSection";

function HomePage() {
  return (
    <>
      <section className="  ">
        <div className="py-10  px-2 mx-auto max-w-[375px] bg-[#d10000]">
          <FideInSection direction="down">
            {" "}
            <h1 className="text-center text-5xl font-greatVibes ">Happy Birthday Veronika </h1>
          </FideInSection>
          <div className="mt-3">
            <img src="/photo_b_2.jpg" alt="" />
          </div>{" "}
          <div className="flex gap-4 justify-center items-center mt-10">
            <FideInSection direction="left" duration={1500}>
              {" "}
              <p className="text-xl date font-greatVibes">Липень</p>
            </FideInSection>
            <FideInSection>
              {" "}
              <p className="text-7xl  font-kapakanaRegular">23</p>
            </FideInSection>
            <FideInSection direction="right" duration={1500}>
              {" "}
              <p className="text-xl date font-greatVibes">2025</p>
            </FideInSection>
          </div>
        </div>
      </section>{" "}
      <section className="  ">
        <div className="pb-10  px-2 mx-auto max-w-[375px] bg-[#d10000]">
          <FideInSection>
            <h2 className="text-center text-4xl font-greatVibes">Дорогі друзі</h2>
            <p className="w-[80%] mx-auto text-center mt-3">
              Дуже скоро настане важливий для мене день - моє 25-ти річчя! Я дуже хочу відсвяткувати цей день з вами мої
              близькі і дорогі люди.
            </p>
            <h3 className="text-center text-4xl font-greatVibes mt-10">Місце</h3>
            <p className="w-[70%] mx-auto mt-2 text-center">Ресторан “Мрійливий Вечір”, просп. Мрій, 7, м. Радість</p>
            <div className="mt-5 ">
              <img className="mx-auto" src="/rest.jpeg" alt="" />
            </div>
            <div className="p-2 border w-[170px] mx-auto mt-5">Подивитися на карті</div>
          </FideInSection>
        </div>
      </section>
      <section className="  ">
        <div className="py-10  px-2 mx-auto max-w-[375px] bg-[#d10000]">
          <h2 className="text-center text-4xl font-greatVibes">Програма</h2>
          <ul className="w-[90%] mx-auto flex flex-col gap-6 mt-10 text-[12px] justify-center items-center">
            <FideInSection className="w-[90%]">
              {" "}
              <li className="flex  w-[90%]  gap-5 items-center justify-center ">
                <div className="w-[35px]  flex justify-center">
                  <img src="/5-removebg-preview.png" alt="" />
                </div>
                <div className="w-[75%]">
                  <p className="text-[16px]">
                    <span>17:00</span>- приїзд гостей
                  </p>
                  <p className="text-[#E3DCD7]">Легкі закуски та напої</p>
                </div>
              </li>
            </FideInSection>
            <FideInSection delay={100}>
              {" "}
              <li className="flex  gap-5 items-center justify-center">
                <div className="w-[40px] h-[40px] ">
                  <img src="/images1-removebg-preview.png" alt="" />
                </div>
                <div className="w-[70%]">
                  <p className="text-[16px]">
                    <span>18:00</span> - Початок банкету
                  </p>
                  <p className="text-[#E3DCD7]">Святкові тости, теплі слова та частування гостей</p>
                </div>
              </li>
            </FideInSection>
            <FideInSection delay={200}>
              {" "}
              <li className="flex  gap-5 items-center justify-center ">
                <div className="w-[50px]  flex justify-center">
                  <img src="/4-removebg-preview.png" alt="" />
                </div>
                <div className="w-[70%]">
                  <p className="text-[16px]">
                    <span>20:30</span> - Розваги та конкурси
                  </p>
                  <p className="text-[#E3DCD7]">Веселі ігри, загадки та активності для всіх гостей</p>
                </div>
              </li>
            </FideInSection>
            <FideInSection delay={300}>
              {" "}
              <li className="flex  gap-5 items-center justify-center ">
                <div className="w-[50px] h-[50px] ">
                  <img src="/2-removebg-preview.png" alt="" />
                </div>
                <div className="w-[70%]">
                  {" "}
                  <p className="text-[16px]">
                    <span>21:30</span>- Танці
                  </p>
                  <p className="text-[#E3DCD7]">Запрошуємо всіх на танцпол, музика та гарний настрій гарантовані</p>
                </div>
              </li>
            </FideInSection>
            <FideInSection delay={400}>
              {" "}
              <li className="flex  gap-5 items-center justify-center ">
                <div className="w-[50px] h-[50px] ">
                  <img src="/public/3-removebg-preview.png" alt="" />
                </div>
                <div className="w-[70%]">
                  {" "}
                  <p className="text-[16px]">
                    <span>23:00</span> - Закінчення свята
                  </p>
                  <p className="text-[#E3DCD7]">Подяка гостям, прощальні слова та сувеніри на пам’ять</p>
                </div>
              </li>
            </FideInSection>
          </ul>
        </div>
      </section>
      <section>
        <div className="py-10  px-2 mx-auto max-w-[375px] bg-[#d10000]">
          <FideInSection>
            {" "}
            <h3 className="text-center text-4xl font-greatVibes">Дрес-код</h3>
            <p className="w-[90%] mx-auto text-center mt-3">
              Будемо раді бачити вас у легких, стильних образах, що створять атмосферу радості та свята!
            </p>
          </FideInSection>
          <FideInSection>
            {" "}
            <div className="mt-10">
              <h3 className="text-center text-4xl font-greatVibes">Подарунок</h3>
              <p className="w-[90%] mx-auto text-center mt-3">
                Буду вдячна за будь-який подарунок, особливо якщо він буде подарований в конверті
              </p>
              <div className="w-[70px] mx-auto">
                <img src="/images__5_-removebg-preview.png" alt="" />
              </div>
            </div>
          </FideInSection>
          <FideInSection>
            {" "}
            <div className="mt-10">
              <h3 className="text-center text-4xl font-greatVibes">Присутність</h3>
              <p className="w-[90%] mx-auto text-center mt-3">
                Будь ласка вступіть в групу в телеграмі якщо приймаєте запрошення. Так я буду знати що Ви прийдете на
                моє свято.
              </p>
              <div className="p-2 border w-[170px] mx-auto mt-5 text-center rounded-[4px]">Приєднатися</div>

              <FideInSection direction="left" delay={1000}>
                {" "}
                <p className="font-greatVibes text-4xl text-center mt-15">До зустрічі!</p>
              </FideInSection>
            </div>
          </FideInSection>
        </div>
      </section>
    </>
  );
}

export default HomePage;
