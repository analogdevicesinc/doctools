<!-- lastmod 2022-08-02 -->
## MAX20430 Evaluation Kit

## General Description

The MAX20430 evaluation kit (EV Kit) is a fully assembled and tested application circuit for the MAX20430  high-effi -ciency four-output PMIC. The EV kit can test all outputs to full load within the normal operating input range of 3.5V to  36V. The IC features two modes of watchdog operation,  challenge/response  and  simple  windowed  mode, which can also be disabled for simplified evaluation. I 2 C communication must be used to configure the MAX20430 and  monitor  errors.  A  PC-to-I 2 C  interface  (such  as  the MINIQUSB  or  MAX32625PICO)  and  software  for  reading and writing to I 2 C registers (such as SimpleI2C) may simplify testing.

## Benefits and Features

- Integrated IC Minimizes Board Area and Layout
- Input Voltage Range from 3.5V to 36V
- User-Programmable Settings through I 2 C
- Challenge/Response or Simple Windowed Watchdog
- 2.1MHz Fixed-Frequency Switching with SpreadSpectrum Option
- Status Monitoring through RESET Pin and I 2 C Status Registers
- Fully Assembled and Tested
- Proven PCB Layout with Automotive-Grade Components

Ordering Information appears at end of data sheet.

Evaluates: MAX20430

## Quick Start

## Required Equipment

- MAX20430 EV Kit
- I 2 C read/write software such as SimpleI2C
- I 2 C interface such as MINIQUSB or MAX32625PICO (PICO board)
- DC power supply (capable of 0-36V output)
- Digital multimeters (DMM)
- Electronic load

## Procedure

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software.

The  MAX20430  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default configura -tion according to Table 2.
- 2) If using the MINIQUSB, connect the USB cable from the PC to the MINIQUSB board and then plug it into J1 on the EV kit. If using the PICO board, separate cables must be used to connect the SDA, SCL, GND, and V DD  pins to the EV kit.
- 3) Connect the positive and negative terminals of the power supply to V SUP  and PGND test pads, respectively.
- 4) Set the power-supply voltage to 13.5V and then turn on the power supply.
- 5) If using SimpleI2C, open the software and load in the register map for MAX20430 by selecting Regmap in the menu bar, then Load Regmap . Check and enable Auto Read on the left menu bar.
- 6) To establish connection to the EV kit, select Device in the menu bar, then Scan for Address . The software should find the default address (0x70). Click OK .

<!-- image -->

## MAX20430 Evaluation Kit

- 7) The default operation of MAX20430 has Packet Error Checking (PEC) enabled. To send I 2 C command with PEC, select Settings in the menu bar, then PEC , then the CRC-8, X 8  + X 2 + X + 1 option.
- 8) The default MAX20430 has the watchdog disabled. If watchdog time is enabled in the part, it can be disabled by setting WDCFG2 (0x14) register bit 3 (WD\_EN) to 0.
- 9) Connect the electronic load across OUT1 and PGND1.
- 10) Enable the load to output and increase the current to 500mA. Verify that OUT1 is still approximately 3.3V.
- 11) Repeat for other channels with load current of interest.

## Detailed Description of Hardware (or Software)

## Detailed Description

The MAX20430 EV kit provides a proven layout for evaluating  the  MAX20430  small,  high-efficiency,  four-output PMIC. The input-output range is shown in Table 1.

## Table 1. Default Jumper Settings

| CHANNEL   | INPUT    | OUTPUT            |
|-----------|----------|-------------------|
| OUT1      | 3.5V-36V | 3.3V/2.5A         |
| OUT2      | OUT1     | 1.2V/3A (default) |
| OUT3      | OUT1     | 5V/500mA          |
| OUT4      | OUT1     | 1.0V/3A (default) |

## Table 2. Default Jumper Settings

| JUMPER    | DEFAULT SHUNT POSITION   | FUNCTIONS                                                                                                        |
|-----------|--------------------------|------------------------------------------------------------------------------------------------------------------|
| EN - J3   | Short                    | IC enable                                                                                                        |
| VDD - J4  | Open                     | Onboard 3.3V SCL/SDA pullup                                                                                      |
| MD1 - J7  | Short to GND             | Mount ID detection (optional)                                                                                    |
| MD2 - J8  | Short to GND             | Mount ID detection (optional)                                                                                    |
| SYNC - J2 | Short                    | Short to BIAS for 2.1MHz switching frequency. Connect to external clock input for different switching frequency. |
| IN5 - J5  | Short to GND             | IN5 comparator input                                                                                             |
| IN6 - J6  | Short to GND             | IN6 comparator input                                                                                             |

## Ordering Information

| PART              | TYPE                    |
|-------------------|-------------------------|
| MAX20430EVKIT#    | EV Kit                  |
| MAX20430EVKITSYS# | EV Kit and MAX32625PICO |

# Denotes RoHS compliant.

Evaluates: MAX20430

## I 2 C Communication and PEC

The  MAX20430  EV  kit  is  designed  to  be  used  with  an I 2 C interface such as the MINIQUSB or MAX32625PICO board  and  PC  software  that  can  read  and  write  to  the device  (such  as  SimpleI2C).  The  IC  has  a  packet-error checking (PEC) feature that is  enabled  by  default. This option can be disabled through CONFIG1 register 0x01, bit 0 (PECE). In order to write to a register when the PEC is enabled, the I 2 C transaction must be followed by a PEC byte. The SimpleI2C software simplifies this process by providing a PEC enable setting.

## Saving and Loading Temporary Configuration

With  SimpleI2C,  the  register  settings  can  be  exported under File &gt; Export Script . This file can be loaded back to the software at any time by selecting File &gt; Run Script . During an evaluation, the IC can be restarted with a temporary register configuration by using the 0x06 PORRST register, which removes the need to fully cycle the power. This  way,  start-up  features  such  as  sequencing  and watchdog timings can be evaluated without switching the IC to a different variant.

## Workflow for I 2 C Configuration

To effectively set up the device, it is recommended that watchdog and PEC are initially disabled while other settings are evaluated. The first item to consider is the output voltages of each channel and the power-up sequencing (FPS).

For detailed information on each register, please refer to the MAX20430 IC datasheet.

│

## MAX20430 EV Kit Bill of Materials

| REF DES                                                                                 |   QTY | VALUE   | MANUFACTURER     | P/N                  | DESCRIPTION                                             |
|-----------------------------------------------------------------------------------------|-------|---------|------------------|----------------------|---------------------------------------------------------|
| C1, C15, C16                                                                            |     3 | 0.1 UF  | TDK              | CGA3E2X7R1H104K080AA | 0.1uF ±10%, 50V X7R ceramic capacitor (0603) AEC-Q200   |
| C2                                                                                      |     1 | 47 UF   | Cornell Dubilier | AFK476M50E16T-F      | 47uF ±20%, 50V aluminum electrolytic capacitor AEC-Q200 |
| C3                                                                                      |     1 | 47 UF   | Taiyo Yuden      | JMK325B7476KMHPR     | 47uF ±10%, 6.3V X7R ceramic capacitor (1210) AEC-Q200   |
| C5, C11, C12                                                                            |     3 | 4.7 UF  | TDK              | CGA4J3X7R1A475K125AB | 4.7uF ±10%, 10V X7R ceramic capacitor (0805) AEC-Q200   |
| C6, C10                                                                                 |     2 | 2.2 UF  | TDK              | CGA3E1X7S1C225M080AE | 2.2μF ±20%, 16V X7S ceramic capacitors (0603) AEC-Q200  |
| C7                                                                                      |     1 | 22 UF   | TDK              | CGA5L1X7S1A226M160AC | 22μF ±20%, 10V X7S ceramic capacitors (1206) AEC-Q200   |
| C8                                                                                      |     1 | 4.7 UF  | TDK              | CNA5L1X7R1H475K160AE | 4.7uF ±10%, 50V X7R ceramic capacitor (1206) AEC-Q200   |
| C9                                                                                      |     1 | 0.1 UF  | TDK              | CGA2B3X7R1H104K050BB | 0.1uF ±10%, 50V X7R ceramic capacitor (0402) AEC-Q200   |
| C13, C17                                                                                |     2 | 22 UF   | TDK              | C2012X7S1A226M125AC  | 22uF ±20%, 10V X7S ceramic capacitor (0805)             |
|                                                                                         |       |         | Murata           | GRT21BC81A226ME13L   | 22uF ±20%, 10V X6S ceramic capacitor (0805) AEC-Q200    |
| C14                                                                                     |     1 | 47 UF   | TDK              | C3216X7S0J476M160AC  | 47uF ±20%, 6.3V X7S ceramic capacitor (1206)            |
|                                                                                         |       |         | Murata           | GRT31CC80J476KE13L   | 47uF ±10%, 6.3V X6S ceramic capacitor (1206) AEC-Q200   |
| J1                                                                                      |     1 | -       | Samtec           | SSQ-110-02-T-D-RA    | 20-pin right angle receptacle                           |
| J2-J4                                                                                   |     3 | -       | Sullins          | PCC02SAAN            | 2-pin headers                                           |
| J5-J8                                                                                   |     4 | -       | Sullins          | PCC03SAAN            | 3-pin headers                                           |
| L1                                                                                      |     1 | 2.2 UH  | Coilcraft        | XEL4030-222MEB       | 2.2uH 7.8A, 22.1mOhm Inductor (4mm x4mm x 3.1mm)        |
| L2, L4                                                                                  |     2 | 0.47 UH | TDK              | TFM252012ALMAR47MTAA | 0.47uH 4.9A, 24mOhm Inductor (2.5mm x2mm x 1.2mm)       |
| L3                                                                                      |     1 | 1 UH    | TDK              | TFM252012ALMA1R0MTAA | 1uH 4.7A,42mOhm Inductor (2.5mm x2mm x 1.2mm)           |
| R1, R2                                                                                  |     2 | 2k      | Vishay           | CRCW04022K00FKED     | 2kOhm ±1%, resistor (0402)                              |
| R3                                                                                      |     1 | 0       | Vishay           | CRCW04020000Z0ED     | 0Ohm ±1%, resistor (0402)                               |
| R5, R6                                                                                  |     2 | 100     | Vishay           | CRCW040210R0FKED     | 10Ohm ±1%, resistors (0402)                             |
| R7, R8                                                                                  |     2 | 499     | Vishay           | CRCW0402499RFKED     | 499Ohm ±1%, resistors (1206)                            |
| R9                                                                                      |     1 | 20k     | Vishay           | CRCW040220K0FKTD     | 20kOhm ±1%, resistors (0402)                            |
| INJ1+                                                                                   |     1 | -       | Keystone         | 5010                 | Test Point (Red)                                        |
| INJ3+                                                                                   |     1 | -       | Keystone         | 5014                 | Test Point (Yellow)                                     |
| INJ2+                                                                                   |     1 | -       | Keystone         | 5013                 | Test Point (Orange)                                     |
| INJ1-, INJ2-, INJ3-                                                                     |     3 | -       | Keystone         | 5011                 | Test Point (Black)                                      |
| VSUP                                                                                    |     1 | -       | Keystone         | 5126                 | Test Point (Green)                                      |
| U1                                                                                      |     1 | -       | Maxim Integrated | MAX20430ATIA/VY+     | 4 Output Mini PMIC (28 TQFN-EP)                         |
| Maxim I/O Loops: VBATP, PGND, OUT1, PGND1, OUT2, PGND2, OUT3, PGND3, OUT4, PGND4, RESET |    11 | -       | Keystone         | 5020                 | Test Point - No Base                                    |
| See Jumper Table                                                                        |     7 | -       | Kycon            | SX1100-B             | Jumper Shunt - 2 Position                               |

JUMPER

EN

VDD

MD1

MD2

SYNC

IN5

IN6

SHUNT LOCATION

Short

Open

Short to GND

Short to GND

Short

Short to GND

Short to GND

Evaluates: MAX20430

## MAX20430 EV Kit Schematic

<!-- image -->

## MAX20430 EV Kit PCB Layouts

Silk Top

<!-- image -->

Top

<!-- image -->

Layer1

<!-- image -->

Layer2

<!-- image -->

│

## MAX20430 EV Kit PCB Layouts (continued)

<!-- image -->

Bottom

Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX20430