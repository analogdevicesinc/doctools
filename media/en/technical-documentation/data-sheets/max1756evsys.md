<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX1756 evaluation system (EV system) consists of a MAX1776 evaluation kit (EV kit) and a companion Maxim system management bus (SMBus  )  interface board.

The MAX1756 EV kit is an assembled and tested circuit board that demonstrates the MAX1756 SOT23 local temperature comparators with SMBus serial interface. Windows ® 95/98 software provides a handy user interface to exercise the MAX1756's features.

Order the MAX1756EVSYS for complete PC-based evaluation of the MAX1756. Order the MAX1756EVKIT if you already have an SMBus interface.

## EV System Component List

| PART         |   QTY | DESCRIPTION                         |
|--------------|-------|-------------------------------------|
| MAX1756EVKIT |     1 | MAX1756 evaluation kit              |
| MAXSMBUS     |     1 | PC parallel port to SMBus interface |

## EV Kit Component List

| REFERENCE   |   QTY | DESCRIPTION                                       |
|-------------|-------|---------------------------------------------------|
| C1          |     1 | 0.1µF 0805 ceramic capacitor                      |
| U1          |     1 | MAX1756AAUT                                       |
| JU1         |     1 | 3-pin jumper                                      |
| H1          |     1 | 6-pin header                                      |
| P1          |     1 | 2 × 10 female right-angle receptacle              |
| None        |     1 | PC board                                          |
| None        |     1 | MAX1756 data sheet                                |
| None        |     1 | MAXSMBUS manual (included in MAX1756EVKIT manual) |
| None        |     1 | 3-1/2in software diskette, MAX1756EVKIT           |

## MAX1756 EV Kit Files

| INSTALL.EXE   | Installs the EV kit files on your computer   |
|---------------|----------------------------------------------|
| MAX1756.EXE   | Application program                          |
| LPTCON.VXD    | Required parallel port driver                |

SMBus is a trademark of Intel Corp.

Windows 95/98 is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | INTERFACE TYPE   |
|---------------|--------------|------------------|
| MAX1756 EVSYS | 0°C to +70°C | Windows software |
| MAX1756 EVKIT | 0°C to +70°C | User-supplied    |

## Recommended Equipment

Before you begin, you will need the following equipment:

- Maxim MAX1756EVKIT and MAXSMBUS interface board
- 12VDC power supply
- Computer running Windows 95/98
- Spare parallel port
- 25-pin I/O extension cable

## Quick Start

- 1) With the power off, connect the 12VDC power supply  to  the  MAXSMBUS board between POS9 and GND. The MAX1756 IC's 5V supply comes from the MAXSMBUS board.
- 2) Connect the boards together.
- 3) Connect the 25-pin I/O extension cable from the computer's parallel port to the MAXSMBUS board. The software uses a loopback connection to confirm that the correct port has been selected.
- 4) Ensure that the jumper settings are in the default position (Table 1).
- 5) Install the software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created for them in the Windows start menu.
- 6) Turn on the power supply.
- 7) Start  the  MAX1756 program by opening its icon in the start menu.
- 8) Click on the Measure Temperature (SAR) button, and observe the measured temperature.

Maxim Integrated Products

1

## MAX1756 Evaluation System

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                |
|----------|------------|-------------------------|
| JU1      | 1-2*       | ADD pin connects to VDD |
| JU1      | open       | ADD pin is floating     |
| JU1      | 2-3        | ADD pin connects to GND |

* Default configuration

## Detailed Description of Software

## Selecting the Device Address

The device address drop-down combo box determines the SMBus address of the device under test. If the question mark (?) is selected, then the software automatically tries each possible address until it finds a device. Each of the supported devices has three possible addresses, depending on the state of the ADD pin. Refer to the MAX1756 data sheet.

## Writing the Command

Clicking the Write command button sends the selected command to the device under test. The most significant bit  is  used  to  mask  under-threshold interrupts or to make the output pin active-high, depending on which type of device is being used. The shutdown checkbox sets the temperature threshold code to -128, placing the  device in  standby mode. Codes between -28 and -127 correspond to a temperature threshold of -54°C (refer to the MAX1756 data sheet). Changes to the controls  are  effective  immediately  if  the  Auto  Write  box  is checked.

## Reading the Status

The status byte is read periodically if the Auto Read box is checked. Otherwise, the status bytes are read by clicking the Read Status button. Some of the bit definitions are device dependent.

## Measuring Temperature

Clicking the Measure Temperature button makes the PC software determine the temperature by successive approximation. The high and low brackets of the unknown temperature range are displayed as THI and TLO, and each test iteration selects a trial temperature halfway between THI and TLO. After a programmable delay time, the status byte is read and the trial value is copied into THI or TLO, depending on the OVER status bit. After eight trials, the 8-bit temperature code is completely  determined. The EV kit software performs the equivalent to the algorithm in Listing 1, with some additional user interface code.

## Detailed Description of Hardware

## Troubleshooting

Problem: Cannot find MAX1756 parallel port connection.

Ensure that the I/O extension cable is connected to a parallel port, and not an SCSI or other type of port. Verify that the supplied LPTCON.VXD is in the same directory as MAX1756.EXE. If a local printer driver is installed, temporarily disable it. The software will not work if the program icon is dragged onto the Windows desktop; instead, install the software into a subdirectory, such as C:\MAX1756. The software can also be run directly from its  floppy disk, as long as both MAX1756.EXE and LPTCON.VXD are in the same directory.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1756 Evaluation System

## Listing 1. Measuring Temperature by Successive Approximation

```
/* Use successive approximation to measure the ambient temperature. ** Returns the measured temperature in degrees C. ** ** global variables: ** __int8 shadow_command contains the last command we wrote ** __int8 shadow_status contains the last status value we read ** ** External functions: **  SMBusSendByte(__int8 address, __int8 command); **  SMBusReceiveByte(__int8 address, __int8* received_data); **  Delay_msec(int delay_time_msec); */ int MeasureTemperature() { /* Write a test temperature, then read the status byte. ** Use the state of the OVER bit to determine each successive bit. */ signed __int8 Thi = 127; /* upper limit starts at maximum */ signed __int8 Tlo = -128; /* lower limit starts at minimum */ while ( (Thi - Tlo) > 0 ) { signed __int8 Ttest = (Thi + Tlo) / 2; /* guess between Thi and Tlo */ SMBusSendByte(address, Ttest); /* set new threshold */ shadow_command = Ttest; Delay_msec(SAR_delay_time); SMBusReceiveByte(address, &shadow_status); /* get status byte */ if (shadow_status & 0x80) { /* over temperature? */ if (Tlo == Ttest) break; /* close enough, exit loop */ Tlo = Ttest; /* move lower limit up */ } else { /* not over temperature */ if (Thi == Ttest) break; /* close enough, exit loop */ Thi = Ttest; /* move upper limit down */ } } return Ttest*2; /* temperature in degrees C = twice the threshold number */ }
```

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1756 Evaluation System

Figure 1. MAX1756 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1756 Evaluation System

<!-- image -->

Figure 2. MAX1756 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX1756 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1756 Evaluation System

Figure 4. MAX1756 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600