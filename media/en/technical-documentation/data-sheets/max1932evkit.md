<!-- lastmod 2022-08-04 -->
## General Description

The MAX1932 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board (PCB). The EV kit contains a MAX1932 step-up switching regulator that includes an 8-bit DAC with an SPI™-compatible serial interface. The output of the step-up switching regulator is  configured for a range of 40V to 90V and can provide up to 2mA. The EV kit is powered from a DC supply providing 4.5V to 5.5V. The EV kit can be reconfigured for an input voltage down to 3V.

The SPI-compatible serial interface can be connected to  an  IBM-compatible PC parallel port for evaluation. Windows® 95/98/2000-compatible software provides a user-friendly interface to demonstrate the features of the MAX1932 IC. The program is menu driven and offers a graphics interface with control buttons.

The MAX1932 EV kit features current-limit protection for the output. The MAX1932 thin QFN package and small external components permit the circuit area to be less than 0.6in ✕ 0.9in.

SPI is a trademark of Motorola, Inc.

Windows is a registered trademark of Microsoft Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C6        |     2 | 1µF ± 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J105K    |
| C2            |     1 | 0.047µF ± 10%, 100V X7R ceramic capacitor (0805) TDK C2012X7R2A473K |
| C3            |     1 | 0.1µF ± 10%, 100V X7R ceramic capacitor (1206) TDK C3216X7R2A104K   |
| C4            |     1 | 0.22µF ± 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A224K   |
| C7            |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K    |
| D1            |     1 | 150mA, 100V Schottky barrier diode SOD123 Diodes Inc. BAT46W        |
| D2, D3        |     2 | 200mA, 25V Schottky diodes SOT23 Fairchild BAT54C                   |
| J1            |     1 | DB-25 male right-angle connector                                    |
| J2            |     1 | 5-pin header                                                        |
| JU2, JU3, JU4 |     3 | 2-pin headers                                                       |

## MXIM

<!-- image -->

## Features

- ♦ 4.5V to 5.5V Input Range
- ♦ Output Voltage Ranges from 40V to 90V
- ♦ Output Ranges are Adjustable with Resistors
- ♦ Overcurrent Protection
- ♦ SPI-Compatible Serial Interface
- ♦ Menu-Driven Software
- ♦ Windows 95/98/2000-Compatible Software
- ♦ Reconfigurable for Input Voltages Down to 3V (Refer to the MAX1932 IC Data Sheet)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE                   |
|---------------|---------------|------------------------------|
| MAX1932EVKIT  | 0°C to +70°C* | 12 Thi n QFN ( 4m m x 4m m ) |
| MAX1932EVKIT+ | 0°C to +70°C* | 12 Thi n QFN ( 4m m x 4m m ) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| L1            |     1 | 100µH, 170mA inductor Sumida CMD4D13NP-101MC           |
| N1            |     1 | 170mA, 100V N-channel MOSFET SOT23 Fairchild BSS123_NL |
| R1            |     1 | 806 Ω ± 1% resistor (0805)                             |
| R2            |     1 | 91k Ω ± 5% resistor (0805)                             |
| R3, R9, R10   |     3 | 1M Ω ± 5% resistors (0603)                             |
| R5            |     1 | 1M Ω ± 1% resistor (0805)                              |
| R6            |     1 | 24.9k Ω ± 1% resistor (0805)                           |
| R7            |     1 | 20k Ω ± 5% resistor (0603)                             |
| R8            |     1 | 32.4k Ω ± 1% resistor (0805)                           |
| R11           |     0 | Not installed, resistor (0603)                         |
| U1            |     1 | MAX1932ETC+ 12-pin Thin QFN (4mm ✕ 4mm)                |
| U2            |     1 | MAX1841EUB+ 10-pin µMAX ®                              |
| -             |     3 | Shunts (JU2, JU3, JU4)                                 |
| -             |     1 | PCB: MAX1932 Evaluation Kit                            |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1932 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Diodes Inc.             | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| Sumida USA              | 847-545-6700 | www.sumida.com        |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1932 when contacting these component suppliers.

## Quick Start

## Required Equipment

The following equipment is required:

- MAX1932 EV kit
- 5V, 500mA DC power supply
- One voltmeter
- (Optional) Windows 95/98/2000 computer with a spare parallel (printer) port
- (Optional) 25-pin I/O extension cable

## Procedure with a Computer

The MAX1932 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install shunts on jumpers JU2, JU3, and JU4.
- 2) With the power off, connect the 5V DC power supply to the MAX1932 EV kit.
- 3) Connect the 25-pin I/O extension cable from the computer's parallel port to the MAX1932 EV kit board. The EV kit software uses a loopback connection to confirm that the correct port has been selected.
- 4) Install  the  evaluation software by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created for them in the Windows Start menu.
- 5) Turn on the power supply. Verify that VOUT is approximately 40V.
- 6) Start the MAX1932 program by opening its icon in the Start menu.
- 7) Click on SPI 3-Wire Parallel Port Diagnostic (Figure 1).
- 8) Click on Bit-Banging Serial Interface.
- 9) Enter 0x01 into 'Data bytes to be written' and click on Send Now (Figure 2).
- 10) Verify that the voltage at the VOUT pad is approximately 90V.
- 11) Enter 0xFF into the 'Data bytes to be written' box and click on Send Now.
- 12) Verify that the voltage at the VOUT pad is approximately 40V.
- 13) Header J2 is provided to monitor the parallel port pins supplying the CLK\_P, CS\_P, DIN\_P (5V signals), and loopback signal. The CS, SCLK, and DIN pads on the EV kit's bottom edge are VCC levelshifted  signals  from  the  MAX1841 translator. Both signal locations can be used for monitoring.

Figure 1. MAX1932 Evaluation Software's Main Window to Access the SPI 3-Wire Parallel Port Diagnostic Utility

<!-- image -->

For instructions on selecting the feedback resistors for other output voltages, see the Output Voltage Range section.

## Procedure without a Computer

Do not turn on the power supply until all connections are completed:

- 1) Remove shunts on jumpers JU2, JU3, and JU4.
- 2) With the power off, connect the 5V DC power supply to the MAX1932 EV kit.
- 3) Turn on the power supply. Verify that VOUT is approximately 40V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. Parallel Port Diagnostic Window's Bit-Banging Serial Interface Tab

<!-- image -->

## Detailed Description

The MAX1932 EV kit contains a step-up switching regulator that includes an 8-bit DAC with an SPI-compatible serial  interface.  The  output  of  the  EV  kit  has  two  settings: the range voltage setting and a specific voltage setting within the range.

As configured, the step-up switching regulator can generate an output range of 40V to 90V and provide up to  2mA of current to the output with 4.75V input. The step-up switching-regulator output voltage can be reconfigured to ranges of 4.5V to 15V, 4.5V to 45V, and 20V to 60V with proper resistor selection (see the Output Voltage Range section).

The voltage setting within the range is set by the 8-bit DAC that receives input data from the SPI-compatible interface. The EV kit connects to a compatible PC parallel port and uses the port to control the EV kit. The EV kit's  SPI  signals  are  connected to a MAX1841 level translator  (U2).  The  translator  level  shifts  the  computer's  parallel  port  logic  5V  signals  to  the  EV  kit's  logic VCC voltage level chosen by the user. The translator can function with voltages down to 2.7V. The level

<!-- image -->

## MAX1932 Evaluation Kit

translator's parallel port side is powered by the parallel port's data pins 6, 7, 8, and 9, diodes D2/D3, and capacitor C6, which provides approximately 5V to the translator's  input.  The power supply connected to VCC provides power to the level translator's output. A 5-pin header (J2) is provided for monitoring the 5V CLK\_P, CS\_P, DIN\_P nonlevel-translated and loopback signals coming from the parallel port cable.

The EV kit can be reconfigured for stand-alone operation  and  connected to an external microcontroller for evaluation. PCB pads are provided for interfacing or monitoring the CS , SCLK, and DIN level-translated pins of the MAX1932 IC.

## Output Voltage Range

## Step-Up Switching Regulator Output Range

The MAX1932 EV kit's step-up switching regulator output range is set from 40V to 90V by feedback resistors R5, R6, and R8. To generate output voltage ranges other than 40V to 90V (4.5V to 15V, 4.5V to 45V, or 20V to 60V), select different external voltage-divider resistors (R5, R6, and R8). Refer to the Output and DAC Adjustment Range section in the MAX1932 data sheet for instruction on selecting resistors.

## Jumper Selection

## Stand-Alone Configuration

The MAX1932 EV kit features four jumpers (JU1-JU4) to  reconfigure the EV kit for stand-alone operation mode or PC/software control mode. Tables 1 and 2 list the options for the desired evaluation mode. Note: All jumpers must be configured for only one mode at a time. A suitable voltage must be selected for standalone mode. Configure all jumpers for either standalone or PC/software control mode.

## Detailed Description of Software

The MAX1932 EV kit software's main window has a button to start the SPI 3-wire parallel port diagnostic utility used for bit-banging data into the MAX1932. Click on SPI 3-Wire Parallel Port Diagnostic to start the utility.

## SPI/3-Wire Diagnostic

The SPI/3-wire diagnostic screen allows you to send SPI or 3-wire commands, or manipulate the parallel port pins directly.  Each of the 25 pins is represented by a checkbox. A checkmark means that the corresponding pin is at a logic-high level. Unused and grounded pins are gray.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1932 Evaluation Kit

Table 1. Stand-Alone Mode

| JUMPER   | SHUNT         | JUMPER FUNCTION                                      | EV KIT MODE                                            |
|----------|---------------|------------------------------------------------------|--------------------------------------------------------|
| JU1      | Cut open      | U2 level translator VCC pin isolated                 | U2 power disconnected                                  |
| JU2      | Not installed | U2 level translator SCLK signal isolated from EV kit | Stand-alone, external controller connected to SCLK pad |
| JU3      | Not installed | U2 level translator CS signal isolated from EV kit   | Stand-alone, external controller connected to CS pad   |
| JU4      | Not installed | U2 level translator DIN signal isolated from EV kit  | Stand-alone, external controller connected to DIN pad  |

Table 2. PC/Software Control Mode

| JUMPER   | SHUNT     | JUMPER FUNCTION                           | EV KIT MODE                               |
|----------|-----------|-------------------------------------------|-------------------------------------------|
| JU1      | Shorted   | U2 level translator powered from VCC rail | U2 power connected                        |
| JU2      | Installed | U2 level translator provides SCLK signal  | PC/software control through parallel port |
| JU3      | Installed | U2 level translator provides CS signal    | PC/software control through parallel port |
| JU4      | Installed | U2 level translator provides DIN signal   | PC/software control through parallel port |

The bit-banging SPI diagnostic utility transmits data using synchronous serial format (similar to Motorola's 68HC11 SPI interface). The SPI interface sends and receives data simultaneously on separate pins. Parallel port pin 2 drives the CLK\_P, pin 3 drives CS\_P, and pin 4 drives DIN\_P.

The data to be sent is 8-bit data represented by a twodigit  hexadecimal DAC code. The DAC code ranges from 0x01 to 0xFF. The output is at the higher limit, 90V, when the DAC code is 0x01, and at the lower limit, 40V, when the DAC code is 0xFF. The DAC code is entered in the 'Data bytes to be written' box and transmitted by clicking on Send Now.

## Troubleshooting

## Problem: Cannot find the MAX1932 EV kit parallel port connection.

Ensure that the I/O extension cable is connected to a parallel  port  and  not  to  a  SCSI  or  other  type  of  port. Verify  that  the  supplied  LPTCON.VXD is in the same directory as MAX1932.EXE. If a local printer driver is installed,  temporarily disable it. The software does not work if the program icon is dragged onto the Windows desktop.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1932 Evaluation Kit

<!-- image -->

Figure 3a. MAX1932 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1932 Evaluation Kit

Figure 3b. MAX1932 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 4. MAX1932 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1932 Evaluation Kit

Figure 5. MAX1932 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1932 Evaluation Kit

Figure 6. MAX1932 EV Kit PCB Layout-Component Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 3, 5, 6, 7

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

Figure 7. MAX1932 EV Kit PCB Layout-Solder Side

<!-- image -->