import React from 'react'

const Q_and_A = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <br/>
        <h2 className="fontGallery display-3 mt-4">אז מה זה טיבוע?</h2>
        <br/>
        <h2 className="fontGallery display-4">כל מה שלא ידעתם ורציתם לשאול....
        </h2><br/>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                מהו טיבוע?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                טיבוע היא שיטת מחקר בזואולוגיה, בה מוצמדת טבעת קטנה, בעלת סימון ייחודי, לגוף בעל חיים. השיטה משמשת בעיקר
                במחקר על עופות ועטלפים. הטיבוע מאפשר מחקר שיטתי על היבטים שונים של חיי בעל החיים על ידי איתורו של בשלב
                מאוחר יותר. בין פרטי המידע אותם יכולים החוקרים ללמוד נמצאים: דפוסי נדידה, תוחלת חיים, תמותה, גודל
                האוכלוסייה והתנהגות טריטוריאלית
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                האם כל אחד יכול לטבע?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                טיבוע ציפורים בישראל ובעולם כולו, מחייב היתר ("רישיון"), ידע נרחב, ניסיון מעשי והסמכה מקצועית; בישראל
                האמור כפוף לרשות הטבע והגנים (רט"ג) ומעוגן בתקנות קפדניות "נוהל היתרי טיבוע 2015" מכוח חוק הגנת חיית הבר
                (תשט"ו 1955) וחוק גנים לאומיים, שמורות טבע ואתרי הנצחה (תשנ"ח 1988).
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                מהו תהליך קבלת רישיון טיבוע?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                קורס עוזרי מטבע הוא הצעד הראשון לקראת קבלת רישיון טיבוע דרגה ג', המאפשר להשתתף באופן פעיל במהלך פעילות
                טיבוע ציפורים, ומהווה הצעד הראשון במסלול ההכשרה של מטבע.

                עיקר הידע הנרכש בקורס הוא עקרונות העבודה עם רשתות ערפל, תוך שימת דגשים על בטיחות ויעילות בעבודה במהלך
                פעילות מחקר ציפורים. בנוסף, יושם דגש על מהות עבודת הטיבוע ככלי מחקר, וכן על הכרת מבנה גוף הציפור
                ועקרונות זיהוי הציפורים במהלך הטיבוע.
                לאחר הוצאת 300 ציפורים מהרשת ניתן לקבל רישיון ג שעימו אפשר לטבע בליווי מטבע ב או א.
                לאחר שנתיים ממועד קבלת רשיון ג ולאחר טיבוע של 2000 ציפורים מ80 מינים לפחות אפשר לעבור מבחן שבסיומו אפשר
                לקבל רישיון טיבוע ב שמקנה יכולת טיבוע עצמאית בתחנת טיבוע קיימת רישמית.
                לאחר 5 שנים ממועד קבלת רישיון ב ולאחר טיבוע של 10,000 ציפורים אפשר לעבור מבחן שבסיומו אפשר לקבל רישיון א
                שמקנה יכולת לפתוח תחנת טיבוע על שמו של מחזיק הרשיון וכן בתיאום מול רט''ג ניתן לטבע גוזלים בקן כמו תנשמות
                וכדומה.

              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour">
                מה היתרון בטיבוע ציפורים?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
              <div className="accordion-body">
                מכיוון שציפורים הינם עופות בר שנמצאות בתזוזה ומרביתם דומות אחת לשניה,
                קשה מאוד עד בלתי אפשרי לעקוב אחרי פרטים ספציפיים ללא טיבוע שכן אין לנו וודאות שזה הפרט הנחקר
                טיבוע מאפשר מעקב מדויק אחר עופות כמו כן ישנם בדיקות שאפשר לבצע רק בטיבוע כמו שומן, משקל, אורך נוצות,
                DNA, ועוד.

              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive">
                האם הטיבוע פוגע בציפורים?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
              <div className="accordion-body">
                מחקרים ובדיקות אין ספור, בישראל ובעולם הראו באופן חד משמעי כי הלכידה אינה פוגעת בציפור, הטיבוע אינו מזיק
                או מכביד וכל הליך הטיבוע והמדידות אינו גורם כל טראומה ונזק; מחקרים ייעודים שבחנו את השפעת הטיבוע על
                רבייה ונדידה גם קבעו חד-משמעית כי לא קיימת כל השפעה לפעולת הלכידה והטיבוע על ההצלחה הרבייתית, מציאת
                זיווג, טיפול בצאצאים, נדידה וכושר השגת המזון.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix">
                האם הטבעת לא מפריעה לציפור?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
              <div className="accordion-body">
                הטבעת נעה בחופשיות על הרגל, אינה מפריעה או מכבידה על התעופה והתנועה ומהווה אחוז זניח ממשקל גוף הציפור. ️
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven">
                מה תפקיד מרכז הטיבוע הישראלי?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
              <div className="accordion-body">
                מרכז הטיבוע הישראלי IBR/C עוסק בהכשרת מטבעים, ריכוז נתוני הטיבוע, ציוד ולוגיסטיקה ותקשורת עם מרכזי הטיבוע
                ברחבי העולם במקרים של מציאת ציפורים מטובעות והחלפת מידע.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="a1 accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseNine">
                צלמתי או מצאתי ציפור עם טבעת - מה עושים ?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
              <div className="accordion-body">
                במקרה של מציאת ציפור מטובעת יש לדווח למרכז הטיבוע - ibr/c.israel@gmail.com דיווח על ציפורים מטובעות יכול
                לספק מידע בעל ערך. יש לדווח את הפרטים הבאים:
                <br/>
                - הפרטים הרשומים על גבי הטבעת (לרוב כתובת ומספר), תמונת הטבעת יכולה להועיל מאוד.
                <br/>
                - במקרה של סימון צבעוני (טבעות או תגים אחרים) יש לדווח מיקום מדויק על גוף הציפור (ימין / שמאל), צבע
                הסימון וכל האותיות או המספרים הרשומים עליו
                <br/>
                - אתר המציאה המדויק
                <br/>
                - תאריך המציאה
                <br/>
                - פרטי המוצא לשם יצירת קשר
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
  <div className="container-fluid">
    <div className="container justify-content-around d-md-flex">
    <h3 className='fontGallery display-3'>שווה קריאה:</h3>
      <div className="row">
        <div className=" linkBox p-0 rounded-4 p-2 bg-primary-subtle col-md-3  box shadow m-2">
          <a href="https://www.birds.org.il/he/article/%D7%9B%D7%AA%D7%91%D7%94-%D7%99%D7%95%D7%A1%D7%A3-%D7%9B%D7%99%D7%90%D7%98-%D7%98%D7%99%D7%91%D7%95%D7%A2-%D7%A6%D7%99%D7%A4%D7%95%D7%A8%D7%99%D7%9D"
            className="text-decoration-none"><i className="fa fa-link c-club"></i>טיבוע ציפורים: עבר, הווה ועתיד
          </a>
        </div>
      <div className=" linkBox p-0 rounded-4 p-2 bg-primary-subtle col-md-3  box shadow m-2">
        <a href="https://www.birds.org.il/he/blog/id/4/63" className="text-decoration-none"><i
            className="fa fa-link c-club"></i> "צפרות מטווח אפס" - פיקי איש שלום ומחשבות על טיבוע ציפורים.  -
          </a>
      </div>
      <div className=" linkBox p-0 rounded-4 p-2 bg-primary-subtle col-md-3  box shadow m-2">
        <a href="https://www.birds.org.il/he/article/%D7%9B%D7%AA%D7%91%D7%94-%D7%99%D7%95%D7%A1%D7%A3-%D7%9B%D7%99%D7%90%D7%98-%D7%90%D7%A4%D7%A8%D7%99%D7%A7%D7%94!"
          className="text-decoration-none"><i className="fa fa-link c-club"></i>אפריקה!!!</a>
      </div>
      <div className=" linkBox p-0 rounded-4 p-2 bg-primary-subtle col-md-3  box shadow m-2">
        <a href="https://www.birds.org.il/he/article/%D7%9B%D7%AA%D7%91%D7%94-%D7%99%D7%95%D7%A1%D7%A3-%D7%9B%D7%99%D7%90%D7%98-%D7%97%D7%99%D7%9C%D7%95%D7%A3-%D7%A0%D7%95%D7%A6%D7%95%D7%AA-%D7%95%D7%92%D7%99%D7%95%D7%9C-%D7%A6%D7%99%D7%A4%D7%95%D7%A8%D7%99%D7%9D-%D7%9C%D7%A6%D7%A4%D7%A8%D7%99%D7%9D"
          className="text-decoration-none"><i className="fa fa-link c-club"></i>חילוף נוצות וגיול ציפורים- ד''ר יוסף כיאט
        </a>
      </div>
    </div>
    </div>
  </div>
  <br/>
    </>
  )
}

export default Q_and_A