import { MjmlColumn, MjmlGroup, MjmlSection, MjmlWrapper } from "mjml-react"

import Link from "~/emails/components/Link"
import Text from "~/emails/components/Text"
import { colors, fontSize, fontWeight, lineHeight } from "~/emails/theme"

export default function Header() {
  return (
    <MjmlWrapper padding="40px 0 64px" backgroundColor={colors.black}>
      <MjmlSection cssClass="gutter">
        <MjmlGroup>
          <MjmlColumn width="42%">
            <Text align="left">
              <Link
                color={colors.white}
                fontSize={fontSize.xl}
                fontWeight={fontWeight.bold}
                href="https://mailing.run"
                textDecoration="none"
              >
                <img
                  height={24}
                  width={112}
                  src={"https://mailing.run/welcome-template/logo-full.png"}
                  alt=""
                  style={{
                    verticalAlign: "text-bottom",
                    paddingRight: 10,
                    paddingBottom: 2,
                  }}
                />
              </Link>
            </Text>
          </MjmlColumn>
          <MjmlColumn width="58%">
            <Text
              align="right"
              fontSize={fontSize.xs}
              lineHeight={lineHeight.tight}
              fontWeight={fontWeight.bold}
            >
              The open source email
              <br />
              platform for teams that code
            </Text>
          </MjmlColumn>
        </MjmlGroup>
      </MjmlSection>
    </MjmlWrapper>
  )
}
