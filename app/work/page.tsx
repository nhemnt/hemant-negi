import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Work',
    description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Passionate about exploring the frontend world and creating projects that are both innovative and entertaining. Here's a summary of my work so far.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Paytm</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Technical Lead
                </p>
                <p>
                    I joined <a href="https://paytm.com/">Paytm</a> in January 2022 as a Senior Software Engineer in Noida, where I have led critical projects and received notable recognitions for my contributions. In 2024, I was promoted to Technical Lead.
                </p>
                <ul>
                    <li>
                    Led the ongoing development of the <a href="https://paytm.com/blog/paytm-help/how-to-use-paytm-for-local-citybus-ticket-booking/" >City Bus</a> Ticketing App using React, Redux, Redux Thunk, and SSR, increasing user engagement by 25% through enhancements to functionality and user experience, resulting in a daily booking volume of 50k.
                    </li>
                    <li>
                    Consistently improved <a href="https://www.paytmbank.com/cards">NCMC</a> Consumer App's frontend features for user-friendliness using React, Redux, Redux Thunk, SASS, Node.js, and NGINX, handling daily traffic of 10k users.
                    </li>
                </ul>
                <p>
                I also played a key role in developing and implementing administrative tools to boost operational efficiency.
                </p>
                <ul>
                    <li>
                    Developed and implemented multiple NCMC Admin Dashboards with React, React Query, SASS, Vite and S3, significantly optimising operational efficiency by reducing page loading speed by 50%.
                    </li>
                    <li>
                    Recognized with the <a href="https://paytm.com/blog/workplace/ultimate-guide-to-paytm-rewards-and-recognition-programme/#:~:text=Rising%20Stars%20are%20those%20who,custom%20goodies%20and%20attractive%20vouchers.">Rising Star Award at Paytm</a> in 2022 and received the Paytm Payments Infinity Award in 2023.
                    </li>
                </ul>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Publicis Sapient</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Associate Technology L2, 2021 — 2022
                </p>
                <p>
                    I joined <a href="https://www.publicissapient.com/">Publicis Sapient</a> in June 2021 as an Associate Technology L2 in Gurgaon, where I focused on developing high-quality web solutions and maintaining rigorous quality standards.
                </p>
                <ul>
                    <li>
                        Developed a retail website using Next.js, leveraging cutting-edge technologies to deliver a seamless user experience.
                    </li>
                    <li>
                        Accurately estimated effort for User Stories and Tasks, adhering to Agile methodologies and delivering features in iterative sprints.
                    </li>
                </ul>
                <p>
                    Additionally, I implemented a robust project architecture to ensure code quality and build integrity.
                </p>
                <ul>
                    <li>
                        Set up pre-commit hooks for commit message validation, along with ESLint and Prettier checks.
                    </li>
                    <li>
                        Established a local Sonar setup to enforce quality standards and maintain project integrity.
                    </li>
                </ul>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Quincus</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Senior Software Engineer - React JS, 2018 — 2021
                </p>
                <p>
                    I joined <a href="https://www.quincus.com/">Quincus</a> in September 2018 to drive innovation and enhance our frontend capabilities using React.js. As a Software Engineer, I focused on developing user-centric solutions and improving our development processes.
                </p>
                <ul>
                    <li>
                        Developed the Quincus Admin Panel's frontend from scratch, employing innovative technologies and user-centric design.
                    </li>
                    <li>
                        Managed application behavior in multiple languages to foster linguistic inclusivity and implemented CI/CD pipelines using Travis CI, streamlining the development workflow and enabling automated testing and deployment.
                    </li>
                </ul>
                <p>
                    In June 2020, I was promoted to Senior Software Engineer. In this role, I led the design and implementation of advanced frontend architectures and drove team collaboration to achieve our project goals.
                </p>
                <ul>
                    <li>
                        Led the design and implementation of a Micro Frontend architecture, enhancing scalability and modularity for seamless integration of frontend components.
                    </li>
                    <li>
                        Orchestrated team collaboration and drove innovation to deliver cutting-edge solutions aligned with project goals and industry best practices.
                    </li>
                </ul>
            </div>
        </section>
    );
}