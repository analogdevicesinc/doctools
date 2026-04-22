<!-- lastmod 2025-04-08 -->
<!-- image -->

## MAX96716A/F DEV\_REV=3 (C-0A) ERRATA SHEET

Corresponds to

MAX96716F: data sheet 19-100944; Rev 2; 11/23

MAX96716A: data sheet 19-100694; Rev 5; 12/23

DEV\_REV=3 (per reading of register 0x0E)

The  errata  listed  below  describe  situations  where  components  of  this  revision  perform  differently  than expected or differently than described in the data sheet. Analog Devices, Inc. may, at its own discretion, take future steps to correct these errata when the opportunity to redesign the product presents itself. Prior to that, Analog Devices has determined the following potential workarounds that customers may want to consider when addressing one of the situations described below.

This errata sheet only applies to components of this revision. These components are branded on the topside of the package with a four-digit code in the form yyww, where yy and ww are two-digit numbers representing the year and work week of manufacture, respectively. The revision of these components can be found by reading DEV\_REV=3 from register 0xE.

## 1) Functional problems with GPIO not transmitting static signals after enabling

## Description:

When GPIO transmission and receiving are enabled, if no GPIO value transition occurs, the static GPIO value may not be transmitted to the other side of the link. That is, if the value change occurs before GPIO forwarding is enabled, it may not be picked up and sent to the other side.

## Workaround:

If the GPIO is expected to be 1 before enabling, write GPIO\_TX\_EN to 1 first, and then write GPIO\_RX\_EN to 1. If the GPIO is expected to be 0 before enabling, write GPIO\_RX\_EN to 1 first, and then write GPIO\_TX\_EN to 1. This will ensure the static GPIO value is propagated to the other side.

## Resolution:

No silicon fix is planned.

## 2) I2C access across the link can lock up if timeout occurs

## Description:

The design architecture for I2C tunneling across the link has an internal I2C to I2C bridge between Serializer and Deserializer, with a default timeout of 32ms.  The Deserializer also acts as an I2C slave when connected to SoC/uC for local register access and has a default timeout of 35ms between Deserializer and SoC/uC.  The timeouts on the two need to be set far enough apart so that if the I2C to I2C bridge times out, then the local I2C slave register access will not be locked out. I2C to I2C bridge timeout between Serializer and Deserializer should be changed from 32ms to 16ms on the Deserializer. The timeout registers on the Serializer do not need to be changed.

419-100036; Rev 10; 4/24

## MAX96716A/F ERRATA SHEET

## Workaround:

Write the SLV\_TO[2:0] (for main I2C) and SLV\_TO\_PT[2:0] (only if using I2C pass-through channel) registers on the Deserializer to 3'b101. This will allow the timeouts to be far enough apart so the lock up does not occur, 16ms and 35ms.

## Resolution:

No silicon fix is planned.

## 3) FEC errors can be inadvertently set after waking up from sleep

## Description:

Each GMSL link has a FEC error that goes to ERRB. Upon waking up from sleep, sometimes the FEC error flag can be falsely set. This is due to partial resetting of interrupt logic. By default, this interrupt is not enabled to go to ERRB, so it only applies if it is enabled.

## Workaround:

This only applies if using FEC and if the interrupts are enabled. After waking up from sleep, clear the FEC errors by writing 0x1 to registers 0x2000 and 0x2100.

## Resolution:

No silicon fix is planned.

## 4) UART pass through may output random data when link loses lock

## Description:

This issue occurs when using the UART pass-through (tunnel) mode and the link is lost, which may cause the UART to output random data for a short period of time after the connection is lost.

## Workaround:

Disable the UART pass through before resetting the GMSL link.  Monitor LOCK and if lock is lost, UART data is invalid.

## Resolution:

No silicon fix is planned.

## 5) GMSL Receiver requires configuration register writes for robust operation

## Description:

For robust operation, the GMSL receiver requires configuration through register writes.

## Workaround:

Perform the register writes in the table below.  After the writes complete, perform a one-shot reset by writing bit RESET\_ONESHOT=1 in register 0x10 for Link A and register 0x12 for Link B.

| Register   | Write Data   | Bit(s) Being Changed   | Purpose                    |
|------------|--------------|------------------------|----------------------------|
| RLMS3F     | 0x3D         | ErrChPhPri             | modify error channel phase |
| RLMS3E     | 0xFD         | ErrChPhSec             | modify error channel phase |
| RLMSAD     | 0x68         | ErrChPhPriFR3G         | modify error channel phase |
| RLMSAC     | 0xA8         | ErrChPhSecFR3G         | modify error channel phase |

## MAX96716A/F ERRATA SHEET

| RLMS18   | 0x07   | VGAHiGain          | enable VGAHiGain (Note 1)          |
|----------|--------|--------------------|------------------------------------|
| RLMS1F   | 0xC2   | AGCInit            | modify initial gain (Note 1)       |
| RLMS8C   | 0x20   | cap_pre_out_rlms   | modify transmit edge rate (Note 2) |
| RLMS98   | 0xC0   | cal_cap_pre_out_en | enable transmit edge rate control  |
| RLMS46   | 0x01   | CRULpCtrl          | modify CRU bandwidth               |
| RLMS45   | 0x81   | CRULpCtrlSREn      | enable CRU bandwidth control       |
| RLMS0B   | 0x44   | AGCacqDly          | modify acquisition delay           |
| RLMS0A   | 0x08   | DFEAdpDly          | modify DFE delay                   |
| RLMS31   | 0x18   | OSNMuH             | modify OSN Mu                      |
| RLMS21   | 0x08   | BSTMuH             | modify BST Mu                      |
| RLMSA5   | 0x70   | PHYC_WBLOCK_DLY    | modify PHYC_WBLOCK_DLY             |

Note 1: This write is required only for 6Gbps operation.  For 3Gbps operation, do not modify this register.

Note 2: Legacy systems may continue to use the previous errata value of 0x10. For new designs it is recommended to use the value of 0x20 to further improve link robustness.

## Resolution

No silicon fix is planned.

## 6) 6Gbps Long Channel operation requires register writes

## Description:

For 6Gbps applications on channels with insertion loss greater than 11dB at 3GHz, register writes are required for robust receiver operation.  These writes must be performed after the writes required for normal channel operation.

## Workaround:

Perform the register writes in the table below.  After the writes complete, perform a one-shot reset by writing bit RESET\_ONESHOT=1 in register 0x10 for Link A and register 0x12 for Link B.

| Register   | Write Data   | Bit(s)   | Purpose              |
|------------|--------------|----------|----------------------|
| RLMS1F     | 0x8C         | AGCInit  | modify initial gain  |
| RLMS23     | 0x58         | BSTInit  | modify initial boost |

## Resolution

No silicon fix is planned.

## 7) After executing Sleep/Wake sequence, RESET\_ALL puts part into Sleep state.

## Description:

After a Sleep/Wake sequence has been executed, writing RESET\_ALL=1 will put the part into Sleep state and this will cause the part not being fully reset to its POR values.  The part can be woken up using the standard local or remote Wake commands. However, after the Wake sequence, the part will be in the state stored in the retention memory during the previous Sleep command instead of being reset to its POR settings. Registers not stored in retention memory will not be affected by this and will be reset to the POR values.

## MAX96716A/F ERRATA SHEET

## Workaround:

PWDNB pin can be used to fully reset the part and restore all registers to their POR settings.

## Resolution:

No silicon fix is planned.

## 8) Video transmission does not automatically restart after the GMSL link loses lock and relocks during video transmission in tunneling mode

## Description:

If the GMSL link loses lock and relocks during video transmission in tunneling mode, the deserializer does not automatically regain video lock. The issue can occur if you for example execute a RESET\_ONESHOT or RESET\_LINK command or unplug the cable during video transmission.

## Workaround:

After the GMSL link relocks, stop and then restart the video stream (including the MIPI clock) into the serializer. Alternatively, disable, then enable video transmission in the serializer by programming register bit VID\_TX\_EN (0x02[6]) in the attached serializer.

## Resolution:

No silicon fix is planned.

- 9) VDD voltage regulator may inadvertently switch to bypass mode.

## Description:

If the VDD pin is externally powered with &gt; 1.14V, the part is intended to automatically enable the internal VDD voltage regulator (i.e., regulator mode).  However, after power-up, the on-chip VDD voltage regulator may unintentionally switch to bypass (unregulated) mode.

## Workaround:

If  the  part is used with VDD &gt; 1.14V, force the regulator to the ON state by performing the following register writes during initialization. These writes should be performed before enabling video, to lock the LDO mode before starting high-current operation.  The order of the register writes below is mandatory.

Set bit[2] = '1' in register 0x10

Set bit[4] = '1' in register 0x12

## Resolution:

No silicon fix is planned.

## 10) GMSL2 Link requires register writes for robust 6 Gbps operation.

## Description:

There are internal circuits (Error Channel) that are, by default, periodically power cycled to perform receiver optimization functions. This power cycling can degrade performance (e.g., link performance, video integrity, etc.) under certain conditions (higher VDD voltages; low temperatures). This problem is prevented by disabling the power cycling function, so the Error Channel is powered on continuously.

|   Gbps | Mode of operation    | Workaround Requirement                    |
|--------|----------------------|-------------------------------------------|
|      6 | Single Link          | Recommended at next software update cycle |
|      6 | Multiple Link        | Required                                  |
|      3 | Single/Multiple Link | Not needed                                |

## MAX96716A/F ERRATA SHEET

## Workaround:

The Error Channel must be forced to remain on (not power cycled) via register writes below.

## RLMS49 (0x1449, 0x1549)

| Bit         | 7           | 6           | 5           | 4           | 3           | 2           | 1           | 0           |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| Field       | RSVD        | RSVD        | RSVD        | RSVD        | RSVD        | ErrChPwrUp  | RSVD        | RSVD        |
| Reset       | 1           | 1           | 1           | 1           | 0           | 0           | 0           | 1           |
| Access Type | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read |

| Bitfield   |   Bits | Decode                                      |
|------------|--------|---------------------------------------------|
| ErrChPwrUp |      2 | 0x0: Automatic control 0x1: Force always on |

| Register   | Default   | Workaround   | Description                             |
|------------|-----------|--------------|-----------------------------------------|
| 0x1449     | 0xF1      | 0xF5         | Force Channel A Error Channel always on |
| 0x1549     | 0xF1      | 0xF5         | Force Channel B Error Channel always on |

These register writes must be performed immediately after every power-up and device reset. Receiver optimization and all other functions are not impacted by this workaround. Total current increase is insignificant and does not impact the EC table values.

## Resolution:

No silicon fix is planned.

## 11) MIPI Tx Pins glitch on Release of PWDNB pin or chip supply power up

## Description:

Glitches visible on MIPI transmit outputs when VTERM supply is available but before CAPVDD supply is stable. This may violate T\_lpx timing requirements for MIPI receiver.

## Workaround:

MIPI receiver must be reset after system supplies and resets are stable.

## Resolution:

No silicon fix is planned.

## MAX96716A/F ERRATA SHEET

## Revision History

|   REVISION NUMBER | REVISION DATE      | DESCRIPTION                                                                                                                                                                                                           |
|-------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                 1 | February 26, 2020  | Initial release                                                                                                                                                                                                       |
|                 2 | March 9, 2020      | Removed unneeded errata                                                                                                                                                                                               |
|                 3 | March 31, 2020     | Differentiated between 3Gbps and 6Gbps PHY operation                                                                                                                                                                  |
|                 4 | August 11, 2021    | Added 'After executing Sleep/Wake sequence, RESET_ALL puts part into Sleep state'                                                                                                                                     |
|                 5 | September 21, 2021 | Added' Video transmission does not automatically restart after the GMSL link loses lock and relocks during video transmission in tunneling mode'                                                                      |
|                 6 | July, 2022         | Corrected bit field for register RLMS45                                                                                                                                                                               |
|                 7 | July 20, 2022      | 1) Removed unused part numbers from header. 2) Updated datasheet reference numbers 3) Clarified wording in item #5 register table 4) Added PHYB RESET_ONESHOT for items 5,6 5) Added voltage regulator item #9 errata |
|                 8 | September, 2022    | Updated RLMS45 0x81, from CRUSSCSelSREn to CRULpCtrlSREn                                                                                                                                                              |
|                 9 | December, 2023     | Added errata 'GMSL2 Link requires register write for robust operation'.                                                                                                                                               |
|                10 | April, 2024        | Added errata ' MIPI Tx Pins glitch on Release of PWDNB pin or chip supply power up'. Updated RLMS8C write data from 0x10 to 0x20 in errata item #5.                                                                   |

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

© 2024 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

One Analog Way, Wilmington, MA 01887 U.S.A. | Tel: 781.329.4700 | © 2024 Analog Devices, Inc. All rights reserved.