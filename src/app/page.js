import { ThemeConfig } from "@/@core/theme/ThemeComponent";
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <main class="relative flex  min-h-screen flex-col items-center  w-full pt-16">
        <div class="bg-red flex pt-8 justify-center">
          <img src="/images/img2.jpg"
            class="rounded-lg w-4/5"
            style={{
              maxHeight: 700
            }}
          />
        </div>
        <div class="mt-10">
          <Typography variant="h4">
            دسته بندی محصولات
          </Typography>
          <div>

          </div>
        </div>
    </main>
  )
}
