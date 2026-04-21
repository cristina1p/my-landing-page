import { ArchiveIcon } from "../components/Icons/Archive";
import { DashboardIcon } from "../components/Icons/Dashboard";
import { FlagIcon } from "../components/Icons/Flag";
import { LockIcon } from "../components/Icons/Lock";
import { MailSendIcon } from "../components/Icons/MailSend";
import { MapLocationIcon } from "../components/Icons/MapLocation";
import { NetworkIcon } from "../components/Icons/Network";
import { SavingsIcon } from "../components/Icons/Savings";
import { TargetIcon } from "../components/Icons/Target";
import styles from "./FavoriteTools.module.css";

interface Tool {
  id: number;
  title: string;
  description: string;
  Icon: React.ComponentType;
}

const toolsData: Tool[] = [
  {
    id: 1,
    title: "Sapien amet est",
    description:
      "Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.",
    Icon: MailSendIcon,
  },
  {
    id: 2,
    title: "Tortor ornare",
    description:
      "Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies",
    Icon: MapLocationIcon,
  },
  {
    id: 3,
    title: "Vel lacus",
    description:
      "Porttitor quis lectus varius quis dolor morbi massa pellentesque",
    Icon: NetworkIcon,
  },
  {
    id: 4,
    title: "Hendrerit blandit",
    description:
      "A aliquam pharetra in nec vitae ultrices commodo placerat eget.",
    Icon: LockIcon,
  },
  {
    id: 5,
    title: "Enim risus turpis",
    description:
      "Tristique dui vestibulum senectus ac duis etiam adipiscing sapien.",
    Icon: DashboardIcon,
  },
  {
    id: 6,
    title: "Aliquam lorem et",
    description:
      "Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio esta mi a sed gravida.",
    Icon: ArchiveIcon,
  },
  {
    id: 7,
    title: "Sed aliquam lectus",
    description:
      "Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.",
    Icon: SavingsIcon,
  },
  {
    id: 8,
    title: "Cursus diam",
    description:
      "Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.",
    Icon: FlagIcon,
  },
  {
    id: 9,
    title: "Facilisi vel malesuada",
    description:
      "Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.",

    Icon: TargetIcon,
  },
];

export function FavoriteTools() {
  return (
    <section className={styles.favoriteTools}>
      <div className={styles.textGroup}>
        <h2 className={styles.title}>Your favourite tools</h2>
        <p>
          In risus nec molestie at in pulvinar tellus. At integer id condimentum
          gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit
          faucibus. Sollicitudin elit gravida tellus mattis porttitor.
        </p>
      </div>
      <div className={styles.gridContainer}>
        {toolsData.map((tool) => {
          const IconComponent = tool.Icon;
          return (
            <div key={tool.id} className={styles.card}>
              {IconComponent && <IconComponent />}
              <h4>{tool.title}</h4>
              <p>{tool.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
