<!-- lastmod 2024-04-11 -->
<!-- image -->

## MAX96714/MAX96714F/MAX96714R DEV\_REV=1 (A-0B) ERRATA SHEET

Corresponds to data sheet 19-101134; Rev2; 06/23

## DEV\_REV=1 (per reading of register 0x0E)

The  errata  listed  below  describe  situations  where  components  of  this  revision  perform  differently  than expected or differently than described in the data sheet. Analog Devices may, at its own discretion, take future steps to correct these errata when the opportunity to redesign the product presents itself. Prior to that, Analog Devices has determined the following potential workarounds that customers may want to consider when addressing one of the situations described below.

This errata sheet only applies to components of this revision. These components are branded on the topside of the package with a four-digit code in the form yyww, where yy and ww are two-digit numbers representing the year and work week of manufacture, respectively. The revision of these components can be found by reading DEV\_REV=1 from register 0xE.

- 1) Frame Sync -functional Problem with automatically selecting the master clock for the FSYNC generation.

## Description:

The Frame Sync function may not select the correct clock when the MST\_LINK\_SEL is set to auto as default.

## Workaround:

Set MST\_LINK\_SEL register bit to 0'b001 to manually select the clock from video pipe Y.

## Resolution:

No silicon fix is planned.

- 2) GMSL2 Link - the GMSL2 receiver requires configuration register writes for optimal link margin.

## Description:

The GMSL2 equalizer requires register writes for optimal link margin.

## Workaround:

Program the RLMS registers to optimize the link performance. After the register writes complete, perform a one-shot reset by writing bit RESET\_ONESHOT=1 in register 0x10.

## RLMS Register Setting for 6Gbps GMSL2 Rate:

| Register   | Write Data   | Bit(s)        | Purpose                       |
|------------|--------------|---------------|-------------------------------|
| RLMS3F     | 0x3D         | ErrChPhPri    | Modify 6G error channel phase |
| RLMS3E     | 0xFD         | ErrChPhSec    | Modify 6G error channel phase |
| RLMSA3     | 0x30         | DFE BST       | Modify DFE BST                |
| RLMSD8     | 0x07         | Sub_gain_ctrl | Modify subtractor gain        |
| RLMSA5     | 0x70         | WBLOCK_DLY    | Increase PHYC_WBLOCK_DLY      |

Note: required for all cable lengths.

419-100084; Rev9, 3/24

## MAX96714/MAX96714F/MAX96714RERRATA SHEET

RLMS Register Setting for 3Gbps GMSL2 Rate:

| Register   | Write Data   | Bit(s)        | Purpose                       |
|------------|--------------|---------------|-------------------------------|
| RLMS7F     | 0x68         | ErrChPhPri    | Modify 3G error channel phase |
| RLMS7E     | 0xA8         | ErrChPhSec    | Modify 3G error channel phase |
| RLMSA3     | 0x30         | DFE BST       | Modify DFE BST                |
| RLMSD8     | 0x07         | Sub_gain_ctrl | Modify subtractor gain        |
| RLMSA5     | 0x70         | WBLOCK_DLY    | Increase PHYC_WBLOCK_DLY      |

Note:  required for all cable lengths.

## Resolution:

No silicon fix is planned.

- 3) GMSL2 Link - Extended GMSL Link Lock times

## Description:

In order to keep consistent lock time, register RLMS45 ( 0x1445), bit 0, CRUSSCmode, must be set to '0'

## Workaround:

Set RLMS45[2:0] to '0'.

If spread spectrum is required, please contact factory for customer specific work around.

## Resolution:

No silicon fix is planned.

- 4) Periodic Register CRC - Intermittent CRC read out

## Description:

In periodic Register CRC mode, if Register CRC is read out during the CRC calculation, the read out may not be correct.

## Workaround:

Read the register CRC 3 consecutive times within a CRC calculation window. If at least two out of three values are same, they are the correct CRC.

## Resolution:

No silicon fix is planned.

## 5) Video\_Lock after GMSL link relock - In Tunnel mode

## Description:

In Tunnel mode, if GMSL link loses lock during the video streaming then relocks, the deserializer doesn't automatically regain the video lock. The issue could occur after reset\_oneshot,or reset\_link command is issued or after unplugging the cable etc during video streaming.

## Workaround:

Option 1: Toggle the video source. After GMSL link relocks, stop then restart the video input (including the MIPI clock) to the serializer.

## MAX96714/MAX96714F/MAX96714R ERRATA SHEET

Option 2: Toggle the video streaming at the output of the serializer. After GMSL link relocks, program the register bit VID\_TX\_EN\_Z (0x02[6]) to '0' and then to '1'.

## Resolution:

No silicon fix is planned.

## 6) After executing Sleep/Wake sequence, RESET\_ALL puts part into Sleep state.

## Description:

After a Sleep/Wake sequence has been executed, writing RESET\_ALL=1 will put the part into Sleep state and this will cause the part not being fully reset to its POR values.  The part can be woken up using the standard local or remote Wake commands. However, after the Wake sequence, the part will be in the state stored in the retention memory during the previous Sleep command instead of being reset to its POR settings. Registers not stored in retention memory will not be affected by this and will be reset to the POR values.

## Workaround:

PWDNB pin can be used to fully reset the part and restore all registers to their POR settings.

## Resolution:

No silicon fix is planned.

## 7) GMSL2 Link requires register writes for robust 6 Gbps operation.

## Description:

There are internal circuits (Error Channel) that are, by default, periodically power cycled to perform receiver optimization functions. This power cycling can degrade performance (e.g., link performance, video integrity, etc.) under certain conditions (higher VDD voltages; low temperatures). This problem is prevented by disabling the power cycling function, so the Error Channel is powered on continuously.

| Device              |   Gbps | Patch Requirement                         |
|---------------------|--------|-------------------------------------------|
| MAX96714            |      6 | Recommended at next software update cycle |
| MAX96714            |      3 | Not needed                                |
| MAX96714F/MAX96714R |      3 | Not needed                                |

## Workaround:

The Error Channel must be forced to remain on (not power cycled) via register writes below.

## RLMS49 (0x1449)

| Bit         | 7           | 6           | 5           | 4           | 3           | 2           | 1           | 0           |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| Field       | RSVD        | RSVD        | RSVD        | RSVD        | RSVD        | ErrChPwrUp  | RSVD        | RSVD        |
| Reset       | 1           | 1           | 1           | 1           | 0           | 0           | 0           | 1           |
| Access Type | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read | Write, Read |

| Bitfield   |   Bits | Description                    | Decode                                      |
|------------|--------|--------------------------------|---------------------------------------------|
| ErrChPwrUp |      2 | Error Channel Power Up control | 0x0: Automatic control 0x1: Force always on |

## MAX96714/MAX96714F/MAX96714RERRATA SHEET

| Register   | Default   | Workaround   | Description                   |
|------------|-----------|--------------|-------------------------------|
| 0x1449     | 0xF1      | 0xF5         | Force Error Channel always on |

These register writes must be performed immediately after every power-up and device reset. Receiver optimization and all other functions are not impacted by this workaround. Total current increase is insignificant and does not impact the EC table values.

## Resolution:

No silicon fix is planned

## 8) MIPI Tx Pins glitch on Release of PWDNB pin or chip supply power up

## Description:

Glitch's visible on MIPI transmit outputs when VTERM supply is available but before CAPVDD supply is stable.  This may violate T\_lpx timing requirements for MIPI receiver.

## Workaround:

MIPI receiver must be reset after system supplies and resets are stable.

## Resolution:

No silicon fix is planned

## MAX96714/MAX96714F/MAX96714R ERRATA SHEET

## Revision History

|   REVISION NUMBER | REVISION DATE    | DESCRIPTION                                                                                                                                                | PAGES CHANGED   |
|-------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | January 27, 2021 | Initial release                                                                                                                                            | -               |
|                 1 | March 5, 2021    | Add #6 'Periodic Register CRC- Intermittent CRC read out'                                                                                                  | 2               |
|                 2 | June 14, 2021    | Add #7 'Video lock after GMSL link relock - In Tunnel mode                                                                                                 | 3               |
|                 3 | July 20, 2021    | Use the latest format                                                                                                                                      | All             |
|                 4 | July 30, 2021    | Update after the review meeting 1. Remove item #2 - MFP2 is not MS 2. Remove item #3 - Input Jitter change Both items has been included in the datasheet . | 1               |
|                 5 | August 11, 2021  | Update the title and item #1                                                                                                                               | 1               |
|                 6 | 1/22             | Added' After executing Sleep/Wake sequence, RESET_ALL puts part into Sleep state'                                                                          | 3               |
|                 7 | 5/23             | Added ErrChPwrUp for 6G robustness                                                                                                                         | 3               |
|                 8 | 7/23             | Changed Datasheet rev to 2 (no other changes)                                                                                                              | 1               |
|                 9 | 3/24             | Added Item 8 Mipi TX glitch                                                                                                                                | 4               |

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

© 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

One Analog Way, Wilmington, MA 01887 U.S.A. | Tel: 781.329.4700 | © 2022 Analog Devices, Inc. All rights reserved.

.