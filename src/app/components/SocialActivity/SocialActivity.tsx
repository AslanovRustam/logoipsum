"use client";
import { useMemo, useState } from "react";
import clsx from "clsx";
// Components
import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";
import SocialActivityItem from "../SocialActivityItem/SocialActivityItem";
import Button from "../Button/Button";
// Utils
import {
  ACTIVITY,
  ACTIVITY_TABS,
  tabToSocialMap,
} from "@/app/contants/activity";
import { EButtonVariant } from "@/app/types/button.enum";
import { EActivity } from "@/app/types/activity.enum";
// Styles
import styles from "./socialactivity.module.css";

export default function SocialActivity() {
  const [activeTab, setActiveTab] = useState<number>(ACTIVITY_TABS[0].id);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = (id: number) => {
    setActiveTab(id);
    setExpanded(false);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const selectedTab = ACTIVITY_TABS.find((tab) => tab.id === activeTab);
  const activeType = selectedTab?.type ?? EActivity.ALL;
  const filterSocial = tabToSocialMap[activeType];

  const filteredActivity = useMemo(() => {
    if (!filterSocial) return ACTIVITY;
    return ACTIVITY.filter((item) => item.social === filterSocial);
  }, [filterSocial]);

  const tabsWithCounts = useMemo(() => {
    return ACTIVITY_TABS.map((tab) => {
      const filterSocial = tabToSocialMap[tab.type];
      const count = filterSocial
        ? ACTIVITY.filter((item) => item.social === filterSocial).length
        : ACTIVITY.length;
      return { ...tab, count };
    });
  }, []);

  const visibleCauses = expanded
    ? filteredActivity
    : filteredActivity.slice(0, 3);

  return (
    <div className={styles.container}>
      <Title title="Social media activity" count={ACTIVITY.length} />
      <Tabs
        activeTab={activeTab}
        selectTab={handleClick}
        tabs={tabsWithCounts}
      />
      {filteredActivity.length === 0 ? (
        <p className={styles.placeholder}>
          No activity found for this category.
        </p>
      ) : (
        <>
          <ul className={clsx(styles.list, expanded && styles.expanded)}>
            {visibleCauses.map((item) => (
              <SocialActivityItem key={item.id} item={item} />
            ))}
          </ul>
          {filteredActivity.length > 3 && (
            <Button
              text={expanded ? "Hide" : "Show More"}
              variant={EButtonVariant.TEXT_GRADIENT}
              fullWidth
              className={styles.button}
              onClick={toggleExpand}
            />
          )}
        </>
      )}
    </div>
  );
}
