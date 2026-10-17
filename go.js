
/* =====================================================
   HERO GYM
   CLIENT WORKOUT SYSTEM

   Training periods:
   first3  = أول 3 شهور
   second3 = تاني 3 شهور

   Training days:
   2, 3, 4, 5

   Subscription:
   1 = شهر
   3 = 3 شهور
===================================================== */


/* =====================================================
   1. GET HTML ELEMENTS
===================================================== */

const clientForm = document.getElementById("workoutForm");

const clientNameInput = document.getElementById("clientName");
const trainingPeriodInput = document.getElementById("trainingPeriod");
const trainingDaysInput = document.getElementById("trainingDays");
const subscriptionInput = document.getElementById("subscription");
const startDateInput = document.getElementById("startDate");

const splitDescription = document.getElementById("splitDescription");
const splitPreviewDays = document.getElementById("splitPreviewDays");

const workoutSection = document.getElementById("workoutSection");
const welcomeName = document.getElementById("welcomeName");
const welcomeDescription = document.getElementById("welcomeDescription");

const totalDays = document.getElementById("totalDays");
const subscriptionLabel = document.getElementById("subscriptionLabel");
const expiryDate = document.getElementById("expiryDate");
const subscriptionStatus = document.getElementById("subscriptionStatus");
const expiredMessage = document.getElementById("expiredMessage");

const workoutDays = document.getElementById("workoutDays");
const exerciseSection = document.getElementById("exerciseSection");

const dayNumber = document.getElementById("dayNumber");
const selectedDayTitle = document.getElementById("selectedDayTitle");
const selectedDayDescription = document.getElementById("selectedDayDescription");

const exerciseCount = document.getElementById("exerciseCount");
const exerciseGrid = document.getElementById("exerciseGrid");


/* =====================================================
   2. EXERCISE HELPER

   image:
   اكتبي مسار الصورة لما تكون جاهزة.

   sets:
   عدد المجموعات.

   reps:
   عدد التكرارات.

   rest:
   وقت الراحة بالثواني.

   المجموعات والتكرارات والراحة هنا قيم افتراضية
   قابلة للتعديل، وليست وصفة تدريبية ثابتة.
===================================================== */

function exercise(name, image = "", sets = 3, reps = "10-12", rest = 60) {
    return {
        name,
        image,
        sets,
        reps,
        rest
    };
}


/* =====================================================
   3. WORKOUT TABLES

   first3:
   أول 3 شهور.

   second3:
   تاني 3 شهور.

   ملاحظة:
   تم الحفاظ على أسماء التمرينات التي قدمتيها.
   تقسيم الجداول حسب الفترة وعدد الأيام قابل للتعديل.
===================================================== */

const workoutPrograms = {

    /* =============================================
       FIRST 3 MONTHS
    ============================================= */

    first3: {

        /* -----------------------------------------
           2 DAYS: LOWER / UPPER
        ----------------------------------------- */

        2: [
            {
                name: "LOWER",
                title: "Lower Body",
                exercises: [
                    exercise("Leg Extension ","images/photo_2026-09-30_18-22-16.jpg"),
                    exercise(" Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Walking Lunges  ","images/photo_2026-10-16_18-57-13.jpg"),
                     exercise(" Leg Press ","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Smith Sumo Squat","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Deadlift","images/photo_2026-10-10_15-33-38.jpg"),
                    exercise("Hip Thrust","images/photo_2026-10-10_15-38-46.jpg"),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            },
            {
                name: "UPPER",
                title: "Upper Body",
                exercises: [
                    exercise("Lat Pulldown ","images/photo_2026-09-30_18-30-54.jpg"),
                     exercise(" Pec Deck","images/photo_2026-09-30_18-10-40 (2).jpg"),
                    exercise("Lateral Shoulder Machine ","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise(" Front Dumbbell Raise","images/photo_2026-10-10_16-04-34.jpg"),
                    exercise("Alternating Dumbbell Biceps","images/photo_2026-10-10_16-19-12.jpg"),
                    exercise("Triceps Rope ","images/photo_2026-09-30_18-10-41 (2).jpg"),
                    exercise("Lower Back ","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise(" BTraps","images/photo_2026-10-10_16-25-05.jpg"),
                    exercise(" T-Bar","images/photo_2026-10-10_16-19-30.jpg"),
                    exercise(" Wrist","images/photo_2026-10-10_16-26-06.jpg"),
                     exercise("Over Bench ","images/photo_2026-10-11_18-52-08.jpg"),
                    exercise("Forearm","images/photo_2026-10-10_16-24-51.jpg")
                ]
            }
        ],


        /* -----------------------------------------
           3 DAYS: PUSH / PULL / LEGS
        ----------------------------------------- */

        3: [
            {
                name: "PULL",
                title: "Pull Day",
                exercises: [
                    exercise("Lat Pulldown", "images/photo_2026-09-30_18-30-54.jpg"),
                    exercise("Seated Row", "images/photo_2026-09-30_18-30-53.jpg"),
                    exercise("T-Bar Row","images/photo_2026-09-30_17-25-33.jpg"),
                    exercise("Reverse Pec Deck","images/photo_2026-09-30_18-30-54 (2).jpg"),
                    exercise("Rear Delt Cable Rope","images/photo_2026-10-10_16-18-42.jpg"),
                    exercise("Close-Grip Preacher Curl","images/photo_2026-10-10_16-31-57.jpg"),
                    exercise("Dumbbell Hammer Curl","images/photo_2026-09-30_18-30-55 (3).jpg"),
                    exercise("Lower Back","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise("Traps","images/photo_2026-10-10_16-25-05.jpg")
                ]
            },

            {
                name: "PUSH",
                title: "Push Day",
                exercises: [
                    exercise("Flat Barbell Bench Press","images/photo_2026-09-30_18-10-39.jpg"),
                    exercise("Incline Chest Press","images/photo_2026-09-30_18-10-40.jpg"),
                    exercise("Pec Deck Fly","images/photo_2026-09-30_18-10-40 (2).jpg"),
                    exercise("Dumbbell Lateral Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Seated Barbell Shoulder Press","images/photo_2026-09-30_18-10-40 (3).jpg"),
                    exercise("Overhead Dumbbell Triceps Extension","images/photo_2026-09-30_18-10-41 (3).jpg"),
                    exercise("Cable Rope Triceps Pushdown","images/photo_2026-09-30_18-10-41 (2).jpg")
                ]
            },

            {
                name: "LEGS",
                title: "Leg Day",
                exercises: [
                    exercise("Leg Extension","images/photo_2026-09-30_18-22-16.jpg"),
                    exercise("Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Leg Press","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Sumo Squat","images/photo_2026-09-30_18-22-17.jpg"),
                    exercise("Smith Machine Squat","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Hip Thrust","images/photo_2026-10-10_15-38-46.jpg"),
                    exercise("Hip Abduction","images/photo_2026-10-10_15-37-48.jpg"),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            }
        ],


        /* -----------------------------------------
           4 DAYS: PUSH / PULL / GLUTES / LEGS
        ----------------------------------------- */

        4: [
            {
                name: "PUSH",
                title: "Push Day",
                exercises: [
                    exercise("Incline Barbell Press","images/photo_2026-10-11_18-40-32.jpg"),
                    exercise("Flat Chest Fly","images/photo_2026-10-11_18-52-08 (2).jpg"),
                    exercise("Over Bench","images/photo_2026-10-11_18-52-08.jpg"),
                    exercise("Shoulder Machine 11","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise("Dumbbell Lateral Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Cable Triceps Pushdown - Bar","images/photo_2026-10-11_18-52-38.jpg"),
                    exercise("Single-Arm Cable Triceps Extension","images/photo_2026-10-11_18-52-07.jpg")
                ]
            },

            {
                name: "PULL",
                title: "Pull Day",
                exercises: [
                    exercise("Assisted Pull-Up 11"),
                    exercise("Seated Row","images/photo_2026-09-30_18-30-53.jpg"),
                    exercise(" Bar Row","images/photo_2026-10-10_16-19-30.jpg"),
                    exercise("Bent-Over Rear Delt Raise","images/photo_2026-10-11_19-06-28.jpg"),
                    exercise("Rear Delt Cable Rope","images/photo_2026-10-10_16-18-42.jpg"),
                    exercise("Preacher Curl","images/photo_2026-10-10_16-31-57.jpg"),
                    exercise("Alternating Dumbbell Curl","images/photo_2026-10-10_16-19-12.jpg"),
                    exercise("Lower Back ","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise(" Traps","images/photo_2026-10-10_16-25-05.jpg")
                ]
            },

            {
                name: "GLUTES",
                title: "Glutes Day",
                exercises: [
                    exercise("Barbell Sumo Squat","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Leg Press 7","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Hip Thrust","images/photo_2026-10-10_15-38-46.jpg" ),
                    exercise(" Hip Abduction","images/photo_2026-10-10_15-37-48.jpg"),
                    exercise("Side Squat","images/photo_2026-10-11_19-11-57.jpg"),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            },

            {
                name: "QUADS + HAMSTRING",
                title: "Quads & Hamstrings",
                exercises: [
                    exercise("Leg Extension","images/photo_2026-09-30_18-22-16.jpg"),
                    exercise("Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Smith Machine Lunges","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Leg Press","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Romanian Deadlift - RDL","images/photo_2026-10-10_15-33-38.jpg"),
                    exercise("Cable Kickback","images/photo_2026-09-30_18-22-18.jpg")
                ]
            }
        ],


        /* -----------------------------------------
           5 DAYS: CHEST / BACK / SHOULDER / GLUTES / LEG
        ----------------------------------------- */

        5: [
            {
                name: "CHEST",
                title: "Chest Day",
                exercises: [
                    exercise("Incline Barbell Press","images/photo_2026-10-11_18-40-32.jpg"),
                    exercise("Flat Dumbbell Press","images/photo_2026-10-11_19-22-31.jpg"),
                    exercise("High Chest Press Machine","images/photo_2026-10-11_19-25-44.jpg"),
                    exercise("Cable Chest Fly","images/photo_2026-10-11_19-22-03.jpg"),
                    exercise("Chest Press","images/photo_2026-10-11_19-22-31.jpg"),
                    exercise("Over Bench","images/photo_2026-10-11_18-52-08.jpg"),
                    exercise("Biceps Curl","images/photo_2026-10-11_19-17-22.jpg"),
                    exercise("Hammer Curl","images/photo_2026-09-30_18-30-55 (3).jpg")
                ]
            },

            {
                name: "BACK",
                title: "Back Day",
                exercises: [
                    exercise("Lat Pulldown","images/photo_2026-09-30_18-30-54.jpg"),
                    exercise("Barbell Row","images/photo_2026-10-10_16-19-30.jpg"),
                    exercise("Close-Grip Lat Pulldown","images/photo_2026-10-16_20-25-38.jpg"),
                    exercise("Single-Arm Dumbbell Row","images/photo_2026-10-16_20-43-32.jpg"),
                    exercise("Cable Row","images/photo_2026-10-16_19-15-57.jpg"),
                    exercise("Seated Row","images/photo_2026-09-30_18-30-53.jpg"),
                    exercise("Lower Back","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise("Cable Overhead Triceps","images/photo_2026-10-11_18-52-07.jpg"),
                    exercise("Wide-Grip Cable Triceps","images/photo_2026-10-11_18-52-38.jpg")
                ]
            },

            {
                name: "SHOULDER",
                title: "Shoulder Day",
                exercises: [
                    exercise("Dumbbell Shoulder Press","images/photo_2026-09-30_18-10-40.jpg"),
                    exercise("Free Barbell Press","images/photo_2026-10-16_19-15-56.jpg"),
                    exercise("Lateral Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Cable Lateral Raise","images/photo_2026-10-16_19-15-56 (2).jpg"),
                    exercise("Rear Delt Rope","images/photo_2026-10-10_16-18-42.jpg"),
                    exercise("Incline Bench Lateral Raise","images/photo_2026-10-11_19-06-28.jpg"),
                    exercise("Shoulder Machine 11","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise("Traps","images/photo_2026-10-10_16-25-05.jpg")
                ]
            },

            {
                name: "GLUTES",
                title: "Glutes Day",
                exercises: [
                    exercise("Barbell Sumo Deadlift","images/photo_2026-10-16_19-46-56.jpg"),
                    exercise(" Lateral Lunge","images/photo_2026-10-11_19-11-57.jpg"),
                    exercise("Hip Thrust","images/photo_2026-10-10_15-38-46.jpg"),
                    exercise("Cable Kickback","images/photo_2026-09-30_18-22-18.jpg"),
                    exercise("Single-Leg Bench Lunge","images/photo_2026-10-16_18-58-14.jpg"),
                    exercise(" Hip Abduction","images/photo_2026-10-10_15-37-48.jpg"),
                    exercise("Glutes on Lower Back Machine","images/photo_2026-09-30_18-30-55.jpg")
                ]
            },

            {
                name: "LEG",
                title: "Leg Day",
                exercises: [
                    exercise("Leg Extension","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise("Standing Single-Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Dumbbell Lunges","images/photo_2026-10-16_18-58-14.jpg"),
                    exercise("Leg Press","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Squat","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Dumbbell Rear-Leg Exercise",'images/photo_2026-10-10_15-33-38.jpg'),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            }
        ]
    },


    /* =============================================
       SECOND 3 MONTHS
    ============================================= */

    second3: {

        /* -----------------------------------------
           2 DAYS: FRONT / BACK
        ----------------------------------------- */

        2: [
            {
                name: "FRONT",
                title: "Front Body",
                exercises: [
                    exercise("Incline Barbell Press","images/photo_2026-10-11_18-40-32.jpg"),
                    exercise("Flat Dumbbell Chest Raise","images/photo_2026-10-11_18-52-08 (2).jpg"),
                    exercise("Front Shoulder Machine","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise("Lateral Shoulder Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Seated Biceps Curl","images/photo_2026-10-10_16-31-57.jpg"),
                    exercise("Standing Barbell Curl","images/photo_2026-10-10_16-24-51.jpg"),
                    exercise("Leg Extension","images/photo_2026-09-30_18-22-16.jpg"),
                    exercise("Bench Lunges","images/photo_2026-10-16_18-58-14.jpg"),
                    exercise("Squat 11","images/photo_2026-10-10_15-30-44.jpg")
                ]
            },

            {
                name: "BACK",
                title: "Back Body",
                exercises: [
                    exercise("Barbell Row","images/photo_2026-10-10_16-19-30.jpg"),
                    exercise("Lat Pulldown","images/photo_2026-09-30_18-30-54.jpg"),
                    exercise("Reverse Pec Deck","images/photo_2026-09-30_18-30-54 (2).jpg"),
                    exercise(" Rear Delt Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Overhead Rope Triceps Extension","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Triceps Kickback","images/photo_2026-10-16_20-05-22.jpg"),
                    exercise("Romanian Deadlift - RDL","images/photo_2026-10-10_15-33-38.jpg"),
                    exercise("Glutes Kickback","images/photo_2026-09-30_18-22-18.jpg"),
                    exercise("Leg Curl Machine","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Squat 7","images/photo_2026-09-30_18-22-17.jpg"),
                    exercise("Calf Raises 11/7/8","images/photo_2026-10-10_15-48-56.jpg")
                ]
            }
        ],


        /* -----------------------------------------
           3 DAYS: LOWER / UPPER / QUADS + HAMSTRING
        ----------------------------------------- */

        3: [
            {
                name: "LOWER",
                title: "Lower Body",
                exercises: [
                    exercise("Leg Extension","images/photo_2026-09-30_18-22-16.jpg"),
                    exercise(" Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Walking Lunges","images/photo_2026-10-16_18-57-13.jpg"),
                    exercise("Smith Sumo Squat","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Leg Press   7 /11","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Deadlift","images/photo_2026-10-16_19-25-45.jpg"),
                    exercise("Hip Thrust","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            },

            {
                name: "UPPER",
                title: "Upper Body",
                exercises: [
                   exercise("Lat Pulldown ","images/photo_2026-09-30_18-30-54.jpg"),
                   exercise(" Pec Deck","images/photo_2026-09-30_18-10-40 (2).jpg"),
                   exercise("Lateral Shoulder Machine ","images/photo_2026-10-10_16-06-26.jpg"),
                   exercise(" Front Dumbbell Raise","images/photo_2026-10-10_16-04-34.jpg"),
                   exercise("Alternating Dumbbell Biceps","images/photo_2026-10-10_16-19-12.jpg"),
                   exercise("Triceps Rope ","images/photo_2026-09-30_18-10-41 (2).jpg"),
                   exercise("Lower Back ","images/photo_2026-09-30_18-30-55.jpg"),
                   exercise(" BTraps","images/photo_2026-10-10_16-25-05.jpg"),
                   exercise(" T-Bar","images/photo_2026-10-10_16-19-30.jpg"),
                   exercise(" Wrist","images/photo_2026-10-10_16-26-06.jpg"),
                   exercise("Over Bench ","images/photo_2026-10-11_18-52-08.jpg"),
                   exercise("Forearm","images/photo_2026-10-10_16-24-51.jpg")
                ]
            },

            {
                name: "QUADS + HAMSTRING",
                title: "Quads & Hamstrings",
                exercises: [
                    exercise("Leg Extension","images/photo_2026-09-30_18-22-16.jpg"),
                    exercise("Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Smith Machine Lunges","images/photo_2026-10-16_19-25-59.jpg"),
                    exercise("Leg Press","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Romanian Deadlift - RDL","images/photo_2026-10-10_15-33-38.jpg"),
                    exercise("Cable Kickback","images/photo_2026-09-30_18-22-18.jpg"),
                    exercise("Hip Abduction","images/photo_2026-10-10_15-37-48.jpg"),
                ]
            }
        ],


        /* -----------------------------------------
           4 DAYS: PUSH / LEG / PULL / GLUTES
        ----------------------------------------- */

        4: [
            {
                name: "PUSH",
                title: "Push Day",
                exercises: [
                    exercise("Flat Barbell Bench Press","images/photo_2026-09-30_18-10-39.jpg"),
                    exercise("High Dumbbell Chest Press","images/photo_2026-09-30_18-10-40.jpg"),
                    exercise("Cable Chest Fly","images/photo_2026-09-30_18-10-40 (2).jpg"),
                    exercise("Shoulder Machine 11","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise("Seated Dumbbell Lateral Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Single Dumbbell Triceps Extension","images/photo_2026-09-30_18-10-41 (3).jpg"),
                    exercise("Wide Bar Triceps Pushdown","images/photo_2026-09-30_18-10-41 (2).jpg")
                ]
            },

            {
                name: "LEG",
                title: "Leg Day",
                  exercises: [
                    exercise("Leg Extension","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise("Standing Single-Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Dumbbell Lunges","images/photo_2026-10-16_18-57-13.jpg"),
                    exercise("Leg Press","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Squat","images/photo_2026-10-10_15-30-44.jpg"),
                    exercise("Dumbbell Rear-Leg Exercise","images/photo_2026-10-16_18-57-13.jpg"),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            },

            {
                name: "PULL",
                title: "Pull Day",
                exercises: [
                    exercise("Barbell Row","images/photo_2026-10-10_16-19-30.jpg"),
                    exercise("Seated Row","images/photo_2026-09-30_18-30-53.jpg"),
                    exercise("Reverse-Grip Lat Pulldown","images/photo_2026-09-30_18-30-54.jpg"),
                    exercise("Deadlift","images/photo_2026-10-16_19-25-45.jpg"),
                    exercise("Rear Delt Cable Rope","images/photo_2026-10-10_16-18-42.jpg"),
                    exercise("Seated Rear Delt Raise","images/photo_2026-10-11_19-06-28.jpg"),
                    exercise("Seated Biceps Curl","images/photo_2026-10-16_20-31-01.jpg"),
                    exercise("Wide Zigzag Bar Biceps Curl","images/photo_2026-10-10_16-31-57.jpg"),
                    exercise("Traps","images/photo_2026-10-10_16-25-05.jpg")
                ]
            },

            {
                name: "GLUTES",
                title: "Glutes Day",
                exercises: [
                    exercise("Barbell Sumo Deadlift","images/photo_2026-10-16_19-46-56.jpg"),
                    exercise(" Lateral Lunge","images/photo_2026-10-11_19-11-57.jpg"),
                    exercise("Hip Thrust","images/photo_2026-10-10_15-38-46.jpg"),
                    exercise("Cable Kickback","images/photo_2026-09-30_18-22-18.jpg"),
                    exercise("Single-Leg Bench Lunge","images/photo_2026-10-16_18-58-14.jpg"),
                    exercise(" Hip Abduction","images/photo_2026-10-10_15-37-48.jpg"),
                    exercise("Glutes on Lower Back Machine","images/photo_2026-09-30_18-30-55.jpg")
                ]
            }
        ],


        /* -----------------------------------------
           5 DAYS: CHEST / BACK / SHOULDER / ARMS / GLUTES + LEG
        ----------------------------------------- */

        5: [
            {
                name: "CHEST",
                title: "Chest Day",
                exercises: [
                    exercise("Smith Machine Flat Bench Press","images/photo_2026-10-16_19-53-55.jpg"),
                    exercise("Incline Dumbbell Press","images/photo_2026-09-30_18-10-40.jpg"),
                    exercise("Incline Dumbbell Fly","images/photo_2026-10-11_18-52-08 (2).jpg"),
                    exercise("Cable Chest Fly","images/photo_2026-10-11_19-22-03.jpg"),
                    exercise("Zigzag Preacher Curl","images/photo_2026-10-11_19-17-22.jpg"),
                    exercise("Single-Arm Dumbbell Biceps Curl","images/photo_2026-09-30_18-30-55 (2).jpg"),
                    exercise("Barbell Forearm Curl","images/photo_2026-10-10_16-24-51.jpg")
                ]
            },

            { 
                name: "BACK",
                title: "Back Day",
                exercises: [
                    exercise("Reverse-Grip Lat Pulldown","images/photo_2026-09-30_18-30-54.jpg"),
                    exercise("Wide-Grip Seated Row","images/photo_2026-10-16_20-24-28.jpg"),
                    exercise("Close-Grip Lat Pulldown","images/photo_2026-10-16_20-25-38.jpg"),
                    exercise("Single-Arm Dumbbell Row","images/photo_2026-10-16_19-15-57.jpg"),
                    exercise("Cable Row","images/photo_2026-10-16_19-15-57.jpg"),
                    exercise("Lower Back","images/photo_2026-09-30_18-30-55.jpg"),
                    exercise("Pull-Up","images/photo_2026-10-16_19-39-18.jpg"),
                    exercise("Two-Arm Cable Triceps Extension"),
                    exercise("Bench Triceps Dip","images/photo_2026-10-16_20-12-33.jpg"),
                    exercise("Wide Zigzag Bar Triceps","images/photo_2026-09-30_18-10-41 (2).jpg"),
                    exercise("Wrist Curl","images/photo_2026-10-10_16-26-06.jpg")
                ]
            },

            {
                name: "SHOULDER",
                title: "Shoulder Day",
                exercises: [
                    exercise("Lateral Shoulder Machine","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise("Front Shoulder Machine","images/photo_2026-10-10_16-06-26.jpg"),
                    exercise("Lateral Raise","images/photo_2026-09-30_18-10-41.jpg"),
                    exercise("Dumbbell Lateral Raise","images/photo_2026-10-16_19-15-56 (2).jpg"),
                    exercise("Dumbbell Front Raise","images/photo_2026-10-16_19-39-18 (2).jpg"),
                    exercise("Incline Bench Rear Delt Raise","images/photo_2026-10-11_19-06-28.jpg"),
                    exercise("Rear Delt Cable Rope","images/photo_2026-10-10_16-18-42.jpg"),
                    exercise("Traps","images/photo_2026-10-10_16-25-05.jpg")
                ]
            },

            {
                name: "ARMS",
                title: "Arms Day",
                exercises: [
                    exercise("Wide Zigzag Bar Biceps Curl","images/photo_2026-10-11_19-17-22.jpg"),
                    exercise("Cable Hammer Curl","images/photo_2026-10-16_20-02-17.jpg"),
                    exercise("Single Dumbbell Preacher Curl","images/photo_2026-09-30_18-30-55 (2).jpg"),
                    exercise("Cable Biceps Curl","images/photo_2026-10-16_20-05-21.jpg"),
                    exercise("Triceps Rope Pushdown","images/photo_2026-09-30_18-10-41 (2).jpg"),
                    exercise("Triceps Kickback","images/photo_2026-10-16_20-05-22.jpg"),
                    exercise("Lying Reverse-Grip Triceps Bar","images/photo_2026-10-16_20-12-33.jpg"),
                    exercise("Wide Zigzag Cable Triceps","images/photo_2026-10-11_18-52-38.jpg"),
                    exercise("Wrist Curl","images/photo_2026-10-10_16-26-06.jpg"),
                    exercise("Forearm Curl","images/photo_2026-10-10_16-24-51.jpg")
                ]
            },

            {
                name: "GLUTES",
                title: "Glutes Day",
                exercises: [
                    exercise("Hip Thrust","images/photo_2026-10-10_15-38-46.jpg"),
                    exercise("Sit-Up","images/photo_2026-10-16_19-58-01.jpg"),
                    exercise("Romanian Deadlift - RDL","images/photo_2026-10-10_15-33-38.jpg"),
                    exercise("Dumbbell Sumo Squat","images/photo_2026-09-30_18-22-17.jpg"),
                    exercise("Hip Abduction Machine","images/photo_2026-10-10_15-37-48.jpg"),
                    exercise("Bulgarian Split Squat","images/photo_2026-10-11_19-11-57.jpg"),
                    exercise(" Leg Curl","images/photo_2026-09-30_18-22-16 (2).jpg"),
                    exercise("Leg Press 7","images/photo_2026-09-30_18-22-16 (3).jpg"),
                    exercise("Glutes Kickback","images/photo_2026-09-30_18-22-18.jpg"),
                    exercise("Calf Raises","images/photo_2026-10-10_15-48-56.jpg")
                ]
            }
        ]
    }
};


/* =====================================================
   4. PROGRAM DESCRIPTIONS
===================================================== */

function getProgramDescription(period, days) {

    const descriptions = {
        first3: {
            2: "برنامج يومين: Lower / Upper",
            3: "برنامج 3 أيام: Push / Pull / Legs",
            4: "برنامج 4 أيام: Push / Pull / Glutes / Legs",
            5: "برنامج 5 أيام: Chest / Back / Shoulder / Glutes / Legs"
        },

        second3: {
            2: "برنامج يومين: Front / Back",
            3: "برنامج 3 أيام: Lower / Upper / Quads + Hamstring",
            4: "برنامج 4 أيام: Push / Leg / Pull / Glutes",
            5: "برنامج 5 أيام: Chest / Back / Shoulder / Arms / Glutes + Legs"
        }
    };

    return descriptions[period]?.[days] || "Workout Program";
}


/* =====================================================
   5. UPDATE PROGRAM PREVIEW
===================================================== */

function updateProgramPreview() {

    if (!trainingPeriodInput || !trainingDaysInput) {
        return;
    }

    const period = trainingPeriodInput.value;
    const days = Number(trainingDaysInput.value);

    const program = workoutPrograms[period]?.[days];

    if (!program) {
        splitDescription.textContent = "اختاري مدة التدريب وعدد الأيام.";
        splitPreviewDays.innerHTML = "";
        return;
    }

    splitDescription.textContent = getProgramDescription(period, days);

    splitPreviewDays.innerHTML = program.map((day, index) => `
        <span class="split-day-item">
            ${String(index + 1).padStart(2, "0")} · ${day.name}
        </span>
    `).join("");
}


/* =====================================================
   6. SUBSCRIPTION DATE HELPERS
===================================================== */

function addMonths(dateString, months) {

    const parts = dateString.split("-").map(Number);

    const year = parts[0];
    const month = parts[1] - 1;
    const day = parts[2];

    const result = new Date(year, month, day);

    // Preserve the original day when possible.
    // If the destination month is shorter, use its final day.
    result.setDate(1);
    result.setMonth(result.getMonth() + months);

    const lastDayOfMonth = new Date(
        result.getFullYear(),
        result.getMonth() + 1,
        0
    ).getDate();

    result.setDate(Math.min(day, lastDayOfMonth));

    return result;
}


function formatDate(date) {

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}


function getTodayAtMidnight() {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
}


/* =====================================================
   7. SUBSCRIPTION STATUS
===================================================== */

function updateSubscriptionStatus(startDateString, months) {

    const start = new Date(startDateString + "T00:00:00");

    const expiry = addMonths(startDateString, months);

    const today = getTodayAtMidnight();

    // Subscription is active until the expiry date.
    const active = today < expiry;

    subscriptionLabel.textContent =
        months === 1 ? "شهر واحد" : "3 شهور";

    expiryDate.textContent = formatDate(expiry);

    if (active) {

        subscriptionStatus.textContent = "Active";
        subscriptionStatus.classList.remove("expired-status");
        subscriptionStatus.classList.add("active-status");

    } else {

        subscriptionStatus.textContent = "Expired";
        subscriptionStatus.classList.remove("active-status");
        subscriptionStatus.classList.add("expired-status");

    }

    return {
        active,
        start,
        expiry
    };
}


/* =====================================================
   8. RENDER WORKOUT DAYS
===================================================== */

function renderWorkoutDays(program) {

    workoutDays.innerHTML = "";

    program.forEach((day, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "workout-day-button";

        button.innerHTML = `
            <span>DAY ${index + 1}</span>
            <strong>${day.name}</strong>
        `;

        button.addEventListener("click", () => {

            document.querySelectorAll(".workout-day-button")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");

            renderExercises(day, index);

        });

        workoutDays.appendChild(button);

    });

    // Open the first workout day automatically.
    const firstButton = workoutDays.querySelector("button");

    if (firstButton) {
        firstButton.click();
    }
}


/* =====================================================
   9. RENDER EXERCISE CARDS

   Add your images later by editing the image property
   in the workoutPrograms data above.

   Example:
   exercise("Lat Pulldown", "ht/lat-pulldown.jpg")
===================================================== */

function renderExercises(day, index) {

    if (!day || !Array.isArray(day.exercises)) {
        return;
    }

    dayNumber.textContent = `DAY ${String(index + 1).padStart(2, "0")}`;

    selectedDayTitle.textContent = day.title || day.name;

    selectedDayDescription.textContent =
        `تمرينات اليوم: ${day.exercises.length} تمرين`;

    exerciseCount.textContent = day.exercises.length;

    exerciseGrid.innerHTML = "";

    day.exercises.forEach((item, exerciseIndex) => {

        const card = document.createElement("article");

        card.className = "exercise-card";

        const imageContainer = document.createElement("div");
        imageContainer.className = "exercise-image";

        if (item.image) {

            const image = document.createElement("img");

            image.src = item.image;
            image.alt = item.name;
            image.loading = "lazy";

            image.addEventListener("error", () => {

                imageContainer.innerHTML = `
                    <span class="image-icon">＋</span>
                    <small>Image coming soon</small>
                `;

            });

            imageContainer.appendChild(image);

        } else {

            imageContainer.innerHTML = `
                <span class="image-icon">＋</span>
                <small>Exercise Image</small>
            `;

        }

        const info = document.createElement("div");
        info.className = "exercise-info";

        info.innerHTML = `
            <span class="exercise-number">
                EXERCISE ${String(exerciseIndex + 1).padStart(2, "0")}
            </span>

            <h4></h4>

            <div class="exercise-details">
                <span class="exercise-detail">
                    Sets: <strong>${item.sets}</strong>
                </span>

                <span class="exercise-detail">
                    Reps: <strong>${item.reps}</strong>
                </span>

                <span class="exercise-detail">
                    Rest: <strong>${item.rest}s</strong>
                </span>
            </div>
        `;

        // Insert exercise names as text to avoid HTML injection.
        info.querySelector("h4").textContent = item.name;

        card.appendChild(imageContainer);
        card.appendChild(info);

        exerciseGrid.appendChild(card);

    });

}

/* =========================================
   SHOW WORKOUT + SAVE CLIENT
========================================= */

function showWorkout(program, clientName, period, days) {

    // Save client information in the browser
    const clientData = {
        clientName: clientName,
        period: period,
        days: days
    };

    localStorage.setItem(
        "heroGymClient",
        JSON.stringify(clientData)
    );

    // Show client information
    welcomeName.textContent = clientName;

    welcomeDescription.textContent =
        getProgramDescription(period, days);

    totalDays.textContent = days;

    workoutSection.classList.remove("hidden");

    // Hide expired subscription message
    if (expiredMessage) {
        expiredMessage.classList.add("hidden");
    }

    // Show workout sections
    document.querySelectorAll(
        ".workout-days-container, .exercise-section"
    ).forEach(section => {
        section.classList.remove("hidden");
    });

    // Hide registration form after registration
    if (clientForm) {
        clientForm.classList.add("hidden");
    }

    // Display the selected workout
    renderWorkoutDays(program);

    // Scroll to workout
    workoutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* =====================================================
   11. FORM SUBMISSION
===================================================== */

/* =========================================
   CLIENT REGISTRATION
========================================= */

if (clientForm) {

    clientForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const clientName = clientNameInput.value.trim();
        const period = trainingPeriodInput.value;
        const days = Number(trainingDaysInput.value);

        if (!clientName || !period || !days) {
            alert("من فضلك املي كل البيانات المطلوبة.");
            return;
        }

        const program = workoutPrograms[period]?.[days];

        if (!program) {
            alert("الجدول المختار غير متاح.");
            return;
        }

        showWorkout(
            program,
            clientName,
            period,
            days
        );

    });

}

/* =====================================================
   12. UPDATE PREVIEW WHEN SELECTION CHANGES
===================================================== */

if (trainingPeriodInput) {

    trainingPeriodInput.addEventListener(
        "change",
        updateProgramPreview
    );

}

if (trainingDaysInput) {

    trainingDaysInput.addEventListener(
        "change",
        updateProgramPreview
    );

}


/* =====================================================
   13. INITIAL SETUP
===================================================== */

updateProgramPreview();

// Open exercise image in a new tab when clicked
document.addEventListener("click", function (event) {

    const image = event.target.closest(".exercise-image img");

    if (!image) return;

    window.open(image.src, "_blank");

});
/* =========================================
   RESTORE SAVED CLIENT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const savedData = localStorage.getItem("heroGymClient");

    if (!savedData) {
        return;
    }

    try {

        const client = JSON.parse(savedData);

        const program = workoutPrograms[client.period]?.[client.days];

        if (!program) {
            return;
        }

        showWorkout(
            program,
            client.clientName,
            client.period,
            Number(client.days)
        );

    } catch (error) {

        console.error("Could not restore client data:", error);

    }

});