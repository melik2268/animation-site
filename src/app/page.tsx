import Image from "next/image";
import styles from "./page.module.css";
import AnimationPage from "./components/AnimationPage";

import profil from "@/app/images/profil.jpeg";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div
          className="d-flex"
          style={{
            position: "absolute",
            top: "100px",
            left: "50px",
            zIndex: "2",
            width: "70%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            className="image-container"
            style={{
              width: "100px",
              height: "200px",
            }}
          >
            {" "}
            <Image
              src={profil}
              width={350}
              height={450}
              style={{
                borderRadius: "50%",
              }}
              alt=""
            ></Image>
          </div>
          <p
            style={{
              color: "#68bfb0",
              height: "100%",
              margin: "auto",
              fontSize: "32px",
              fontWeight: "700",
            }}
          >
            Hello I am Melik Bağrıyanık <br />I am Software Engineer
          </p>
        </div>

        <AnimationPage></AnimationPage>
      </div>
    </main>
  );
}
