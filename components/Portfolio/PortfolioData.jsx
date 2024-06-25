import PortfolioImg from '@/public/images/portfolio-img.jpg';
import porto1 from '@/public/images/porto1.jpg';
import porto2 from '@/public/images/porto2Img1.png';
import porto3 from '@/public/images/porto3.png';
import porto1Img1 from'@/public/images/porto1Img1.png';
import porto1Img2 from'@/public/images/porto1Img2.png';
import porto2Img1 from'@/public/images/porto2Img1.png';
import porto2Img2 from'@/public/images/porto2Img2.png';
import porto3Img1 from'@/public/images/porto3Img1.png';
import porto3Img2 from'@/public/images/porto3Img2.png';
import porto1Main from '@/public/images/porto1Main.png';
import porto2Main from '@/public/images/porto2Main.png';
import porto3Main from '@/public/images/porto3Main.png';
import MainImage from '@/public/images/blog-img-wide.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent",
        title2Span: "Works",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    projects: [
        {
            title: 'Exploratory Data Analysis (EDA) on Smartphone',
            slug: 'first',
            description: 'Portofolio ini menyajikan analisis data eksploratif (EDA) pada sebuah dataset smartphone. Analisis ini mencakup memuat dan menyiapkan dataset, pra-pemrosesan data, serta analisis eksploratif yang mendetail untuk mengungkapkan wawasan mengenai berbagai fitur smartphone dan hubungan antar fitur tersebut.',
            services: [
                { name: 'Python' },
            ],
            client: 'Personal',
            projectLink: {
                title: 'Google Colab',
                url: 'https://colab.research.google.com/drive/1aDw6UG0B53dLIu4aqw-KrJwLy5DcKjah?usp=sharing'
            },
            duration: '121 hours',
            content: 'Tujuan dari portfolio ini adalah untuk melakukan Analisis Data Eksploratif (EDA) pada dataset smartphone. EDA membantu kita memahami dataset dengan lebih baik, mengeksplorasi hubungan antar variabel, dan menemukan wawasan yang dapat digunakan untuk pengambilan keputusan yang lebih baik.',
            mainImage: porto1,
            mainImageWide: porto1Main,
            images: [
                { image: porto1Img1 },
                { image: porto1Img2 },
            ],
            categories: [
                { name: 'Data Science' },
                { name: 'Data Analyst' },
                { name: 'Data Visualization' }
            ],
        },
        {
            title: 'Road Damage Detection (CNN)',
            slug: 'second',
            description: 'Tujuan dari proyek ini adalah untuk membangun model pembelajaran mesin yang dapat mendeteksi kerusakan jalan dari gambar dan menerapkan model ini dalam aplikasi web. Proyek ini dibagi menjadi tiga bagian utama: Pengembangan Model: Membuat jaringan saraf konvolusi (CNN) untuk klasifikasi gambar. Pengembangan Backend: Mengimplementasikan server Flask untuk inferensi model dan menangani permintaan pengguna. Pengembangan Frontend: Membangun antarmuka web berbasis React untuk pengguna mengunggah gambar dan melaporkan kerusakan jalan.',
            services: [
                { name: 'Python' },
                { name: 'Flask' },
                { name: 'React' },
            ],
            client: 'Personal',
            projectLink: {
                title: 'Google Colab',
                url: 'https://www.flatheme.net'
            },
            duration: '28 days',
            content: 'Project ini menggunakan dataset dari Dinas Pekerjaan Umum Indonesia untuk mengklasifikasikan 6 jenis kerusakan jalan: lubang, stripping, retak panjang, retak buaya, retak blok, dan retak samping. Mengingat kerusakan jalan seringkali sulit dikenali karena warnanya mirip dengan jalan normal, saya mengembangkan model Convolutional Neural Network (CNN) dengan lapisan-lapisan convolutional, batch normalization, pooling, dan dropout untuk mengatasi overfitting. Model ini dilatih menggunakan ImageDataGenerator untuk augmentasi data dan validasi yang kuat. Setelah beberapa kali proses pelatihan, saya berhasil mencapai akurasi sebesar 82% dengan loss 30%. Model ini menggunakan optimizer Adam dengan learning rate yang disesuaikan, serta callbacks seperti EarlyStopping dan ModelCheckpoint untuk mempertahankan dan menyimpan model terbaik selama pelatihan. Untuk evaluasi, kami menggunakan confusion matrix dan classification report pada dataset validasi. Kedepannya, saya berencana meningkatkan model dengan dataset tambahan untuk meningkatkan akurasi dan mengurangi loss, dengan tujuan menciptakan model yang lebih robust dan dapat diandalkan untuk deteksi kerusakan jalan di Indonesia.',
            mainImage: porto2,
            mainImageWide: porto2Main,
            images: [
                { image: porto2Img1 },
                { image: porto2Img2 },
            ],
            categories: [
                { name: 'Data Science' },
                { name: 'Machine Learning' },
                { name: 'Web Dev' }
            ],
        },
        {
            title: 'Petrokimia Gresik Futsal Championship',
            slug: 'third',
            description: 'Petrokimia Gresik Futsal Championship (PGFC) adalah sebuah program yang diinisiasi oleh PT Petrokimia Gresik untuk menyelenggarakan event futsal secara berkala. Website PGFC dirancang untuk menjadi platform utama bagi pengumuman jadwal, hasil pertandingan, pendaftaran tim, dan berbagai informasi terkait lainnya. Tujuan utama dari website ini adalah untuk meningkatkan interaksi dan keterlibatan antara PT Petrokimia Gresik dengan peserta, penonton, dan masyarakat luas. Website ini juga bertujuan untuk memberikan pengalaman pengguna yang lebih baik dan meningkatkan efisiensi komunikasi terkait event futsal yang diselenggarakan.',
            services: [
                { name: 'Laravel' },
                { name: 'PHP' },
                { name: 'Javascript' },
                { name: 'Boostrap' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'Privacy',
                url: ''
            },
            duration: '3 months',
            content: 'Petrokimia Gresik Futsal Championship (PGFC) adalah sebuah inisiatif tahunan yang dipelopori oleh PT Petrokimia Gresik, bertujuan untuk mempromosikan olahraga futsal dan membina talenta muda di Indonesia. Acara ini telah menjadi ajang bergengsi yang dinantikan oleh banyak tim futsal dari berbagai daerah. Website resmi PGFC dirancang untuk menjadi pusat informasi dan komunikasi bagi semua yang terlibat dalam turnamen ini. Pada halaman utamanya, pengunjung akan disambut dengan tampilan yang informatif dan menarik, memberikan gambaran umum tentang PGFC, termasuk latar belakang dan tujuan dari penyelenggaraan acara ini. Salah satu fitur utama dari website ini adalah jadwal pertandingan, di mana para peserta dan penonton dapat dengan mudah mengakses informasi mengenai tanggal dan waktu setiap pertandingan. Setelah pertandingan berlangsung, hasilnya akan segera diperbarui di bagian hasil pertandingan, memastikan semua orang tetap up-to-date dengan perkembangan turnamen. Bagi tim yang ingin berpartisipasi, website PGFC menyediakan formulir pendaftaran online yang mudah diakses. Dengan proses pendaftaran yang sederhana, tim-tim dapat dengan cepat mendaftarkan diri untuk bergabung dalam kompetisi ini. Selain itu, website ini juga memiliki bagian berita dan pengumuman yang menyajikan informasi terkini dan pengumuman penting terkait acara futsal. Pengguna dapat menemukan berita terbaru, wawancara dengan pemain, serta berbagai informasi menarik lainnya. Galeri di website PGFC menampilkan koleksi foto dan video dari pertandingan serta acara terkait lainnya, memberikan kesempatan bagi semua untuk mengenang momen-momen seru dan berharga selama turnamen berlangsung. Jika ada pertanyaan atau kebutuhan untuk komunikasi lebih lanjut, bagian kontak menyediakan informasi yang diperlukan untuk menghubungi panitia penyelenggara. Dengan semua fitur tersebut, website PGFC tidak hanya menjadi alat komunikasi yang efektif tetapi juga sarana untuk membangun komunitas futsal yang lebih solid dan terorganisir. Melalui PGFC, PT Petrokimia Gresik berharap dapat terus mendorong semangat olahraga dan kebersamaan di kalangan masyarakat.',
            mainImage: porto3,
            mainImageWide: porto3Main,
            images: [
                { image: porto3Img1 },
                { image: porto3Img2 },
            ],
            categories: [
                { name: 'Web Dev' },
                { name: 'UI' },
                { name: 'UX' }
            ],
        },
    ]
};