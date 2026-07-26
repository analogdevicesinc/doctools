<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5734 Evaluation System/Evaluation Kit

## General Description

The MAX5734 evaluation system (EV system) consists of a MAX5734 evaluation kit (EV kit), Maxim 68HC16MODULEDIP microcontroller (µC) module, and USBT0232. The MAX5734 EV kit demonstrates the operation of the MAX5734 32-channel, 16-bit, voltage-output digital-toanalog converter (DAC). It has a QSPI™-programmable -2.5V to +7.5V output voltage range. Windows® 98/2000/XP-compatible software provides a handy user interface to exercise the features of the MAX5734.

The MAX5734 EV kit can also evaluate the MAX5733 and the MAX5735. The MAX5733 has a 0 to +10V range, and the MAX5735 has a -5V to +5V range. Order free samples of the MAX5733ACTN or MAX5735ACTN through Maxim's website. Order the complete EV system (MAX5734EVC16) for a comprehensive evaluation of  the  MAX5734  using  a  PC.  Order  the  EV  kit (MAX5734EVKIT) if the 68HC16MODULE-DIP module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

SPI and QSPI are trademarks of Motorola, Inc. Windows is a registered trademark of Microsoft Corp. MICROWIRE is a trademark of National Semiconductor Corp.

## MAX5734 EV System

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX5734EVKIT     |     1 | MAX5734 EV kit                |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module              |
| USBT0232+        |     1 | USB-to-COM port adapter board |

## MAX5734 EV Kit

| DESIGNATION               |   QTY | DESCRIPTION                                                                                                |
|---------------------------|-------|------------------------------------------------------------------------------------------------------------|
| C1-C6, C17, C18, C19, C21 |    10 | 1µF, 10V, X5R ceramic capacitors (0603) Murata GRM188R61A105K TDK C1608X5R1A105K                           |
| C7-C10                    |     4 | 10µF, 16V, X5R ceramic capacitors (1210) Taiyo Yuden EMK325BJ106MN TDK C3325X5R1C106M                      |
| C11-C14                   |     0 | Not installed, capacitors (0603)                                                                           |
| C15                       |     1 | 47pF, 50V, C0G ceramic capacitor (0603) Murata GRM1885C1H470J Taiyo Yuden UMK107CG470JZ TDK C1608C0G1H470J |

- ♦ 32 Individual DACs
- ♦ Compatible with 0 to +10V, ±5V, and -2.5V to +7.5V Output Range
- ♦ Glitch-Free Power-Up
- ♦ SPI™/QSPI/MICROWIRE™ Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested
- ♦ EV Kit Software Supports Windows 98/2000/XP with RS232/COM Port
- ♦ EV Kit Software Supports Windows 2000/XP with USB Port

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX5734EVKIT | 0°C to +70°C | Not included     |
| MAX5734EVC16 | 0°C to +70°C | 68HC16MODULE-DIP |

Note: The MAX5734 software is designed for use with the complete MAX5734EVC16 EV system (includes 68HC16MODULEDIP module, USBT0232, and MAX5734EVKIT). If the MAX5734 evaluation software will not be used, the MAX5734EVKIT board can be purchased without the µC module.

## Component Lists

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                    |
|---------------|-------|----------------------------------------------------------------------------------------------------------------|
| C16           |     1 | 100pF, 50V, C0G ceramic capacitor (0603) Murata GRM1885C1H101J TDK C1608C0G1H101J                              |
| C20           |     1 | 0.1µF, 16V, X7R ceramic capacitor (0603) Murata GRM188R71C104KA01 Taiyo Yuden EMK107BJ104KA TDK C1608X7R1C104K |
| J1            |     1 | 2 x 20 right-angle female receptacle                                                                           |
| JU1           |     1 | 2 x 12 straight header                                                                                         |
| JU2, JU3      |     2 | 2 x 13 straight headers                                                                                        |
| JU4           |     1 | 3-pin header                                                                                                   |
| JU5           |     1 | 8-pin header                                                                                                   |
| JU6, JU7      |     0 | Not installed, 2-pin headers                                                                                   |
| JU8           |     1 | 2-pin header                                                                                                   |
| L1, L2, L3    |     3 | Ferrite chip beads (0805)                                                                                      |
| R1-R4         |     0 | Not installed, resistors (0603)                                                                                |
| R5            |     1 | 200k Ω ± 5% resistor (0603)                                                                                    |
| R6            |     1 | 20k Ω ± 5% resistor (0603)                                                                                     |
| U1            |     1 | MAX5734BCTN                                                                                                    |
| U2            |     1 | MAX6163AESA                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

## MAX5734 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX5734 when contacting these component suppliers.

## MAX5734 Stand-Alone EV Kit

The MAX5734 EV kit provides a proven printed circuit board (PCB) layout to evaluate the MAX5734. It must be interfaced to appropriate timing signals for proper operation. Connect +5V across DVDD and DGND, and connect the digital signals to JU5. See Figure 3 and the MAX5734 EV Kit Schematic (Figure 4). Refer to the MAX5734 data sheet for timing requirements.

## MAX5734 EV System

The MAX5734EVC16 EV system operates from a usersupplied 7VDC to 20VDC power supply. Windows 98/2000/XP-compatible software running on a PC interfaces to the EV system board through the computer's serial  communications  port.  The  68HC16  module communicates with the MAX5734 through a 4.19MHz QSPI port. See the Quick Start section for setup and operating instructions.

## Quick Start

## Recommended Equipment (USB Port PC Connection Option)

Before beginning, the following equipment is recommended:

- MAX5734EV system MAX5734 EV kit 68HC16MODULE-DIP USBTO232+
- +5VDC power supply for AVDD
- +8VDC power supply for AVCC
- -3VDC power supply for VSS
- DC power supply capable of supplying a voltage between +7V to +28V for the 68HC16 module board
- One voltmeter
- Windows 2000/XP-compatible computer with an available USB port to connect to the USBTO232 board
- USB cable included with the USBTO232

2

## Procedure

The MAX5734 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the USBTO232+ User Guide. Follow the steps in the Quick Start section of the USBTO232+ User Guide and return to step 2 of this Quick Start section when finished.
- 2) Carefully connect the boards by aligning the 40-pin connector of the MAX5734 EV kit with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together.
- 3) Connect the USBTO232 board to the 68HC16MODULE-DIP module if you have not already done so.
- 4) The MAX5734 EV kit software should have already been downloaded and installed in the USBTO232 Quick Start .
- 5) Install  a  shunt  on  pins  1-2  of  JU4  to  place  the MAX5734 in SPI interface mode.
- 6) Install a shunt on JU8 to connect the ground sense (GS) to the header (JU2).
- 7) Connect the +7VDC to +28VDC power supply to J2 on the 68HC16 module board.
- 8) Connect the +5VDC power supply between AVDD and GND on the MAX5734 EV kit.
- 9) Connect the +8VDC power supply between AVCC and GND on the MAX5734 EV kit.
- 10) Connect the -3VDC power supply between VSS and GND on the MAX5734 EV kit.
- 11) Start the MAX5734 program by opening its icon in the Start | Programs menu.
- 12) Turn on the power supplies and slide SW1 to the ON position on the 68HC16MODULE-DIP module. Click the OK button after the Maxim Evaluation Kit Serial Interface form (Figure 1) opens. The program automatically downloads KIT5734.C16 to the module.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5734 Evaluation System/Evaluation Kit

- 13) The MAX5734 Evaluation Kit Main form (Figure 2) opens after the download to the 68HC16 module is complete.
- 14) Verify that the output voltage is approximately -2.5V.

## Recommended Equipment (RS232/COM Port PC Connection Option)

Before beginning, the following equipment is recommended:

- MAX5734 EV system MAX5734 EV kit 68HC16MODULE-DIP USBTO232+ (USB-to-COM port adapter board)
- +5VDC power supply for AVDD
- +8VDC power supply for AVCC
- -3VDC power supply for VSS
- DC power supply capable of supplying a voltage between +7V to +28V for the 68HC16 module board
- One voltmeter
- Windows 98/2000/XP-compatible computer with an available serial (COM) port
- 9-pin serial extension cable
- 8) Connect the +5VDC power supply between AVDD and GND on the MAX5734 EV kit.
- 9) Connect the +8VDC power supply between AVCC and GND on the MAX5734 EV kit.
- 10) Connect the -3VDC power supply between VSS and GND on the MAX5734 EV kit.
- 11) Start the MAX5734 program by opening its icon in the Start | Programs menu.
- 12) Turn on the power supplies and slide SW1 to the ON position. Click the OK button after the Maxim Evaluation Kit Serial Interface form window opens (shown in Figure 1). The program will automatically download KIT5734.C16 to the module.
- 13) The MAX5734 Evaluation Kit Main form window opens (shown in Figure 2) after the download to the 68HC16 module is complete.
- 14) Verify that the output voltage is approximately -2.5V.

## Detailed Description of Software

The MAX5734 has 32 channels. Each channel consists of an input register and a DAC register. The input and DAC registers can be loaded simultaneously by using the write-thru command. Alternatively, the input register can be loaded and the DAC register loaded later by using either the load DAC command or asserting the load DAC ( LDAC )  pin.  The  output voltage on the MAX5734 changes after loading the DAC register.

## User-Interface Panel

The user interface (shown in Figure 2) is easy to operate; use the mouse, or press the tab and arrow keys to navigate.

Note: Words in boldface are user-selectable features in the software.

## Input/DAC Registers

Select the desired channel by choosing it from the Active Channel pulldown menu or by clicking on the name in the register table. Set the output voltage by either  entering  the  desired  voltage  in  the  Voltage  edit field,  or  by  entering  the  DAC  code  into  the  Hex  edit field or Decimal edit field.

The voltage for the 32 DACs is given by the following equation:

<!-- formula-not-decoded -->

where Gain = 10/3, VREF is the reference voltage, and VGS is the ground-sense voltage.

3

## Procedure

The MAX5734 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 5734Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).
- 2) Install  the  MAX5734 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Carefully connect the boards by aligning the 40-pin connector of the MAX5734 EV kit with the 40-pin header of the 68HC16 module board. Gently press them together.
- 4) Connect a cable from the computer's 9-pin serial port to the 68HC16 module board. Use a straightthrough, 9-pin, female-to-male cable.
- 5) Install  a  shunt  on  pins  1-2  of  jumper  JU4  to  place the MAX5734 in SPI interface mode.
- 6) Install a shunt on JU8 to connect the ground sense (GS) to the header (JU2).
- 7) Connect the +7VDC to +28VDC power supply to J2 on the 68HC16 module board.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

## Offset DAC

The offset DAC is configured like the other 32 channels. The offset voltage is given by the following equation:

<!-- formula-not-decoded -->

## Write-Thru

Write-thru loads both the input register and DAC register at the same time. If write-thru is not used, the DAC register must be loaded by sending either the load DAC command or pulling the LDAC pin low.

## Read DAC

Read DAC reads the DAC register for the active channel (OUT0-OUT31 or OFFSET). Note: The ALL register is write only.

## Clear DAC

Clear DAC clears both the input register and DAC register for the active channel (OUT0-OUT31, OFFSET, or ALL). Note: ALL does not include OFFSET.

## Table 1. Configuration Register Settings

| NAME   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ERRF   | Error flag; ERRF goes logic high when an invalid command is attempted. ERRF is cleared each time the configuration register is read back to DOUT. Clear register commands C2, C1, and C0 = 111 resets ERRF. Conditions that trigger ERRF include: • Attempted read of address bits A5-A0 = 111111 (all 32 DACs) • Access to reserved addresses • Access to the configuration register (address bits A5-A0 = 100001 when used with control bits C2, C1, and C0 = 010 and 011) Default is logic low (no error flags); ERRF is read only. |
| SING   | Single device; SING determines the manner in which data is output to DOUT. A logic high sets the device to operate in stand-alone mode or in parallel; only the 16 data bits are output to DOUT. A logic low sets the device to operate in a daisy chain of devices. In this case, the entire 32-bit command word is output to DOUT. Default is logic low (daisy-chain mode); SING is read/write.                                                                                                                                      |
| GLT    | Glitch-suppression enable; the MAX5733/MAX5734/MAX5735 feature glitch-suppression circuitry on the analog outputs that minimizes the output glitch during a major carry transition. A logic low disables the internal glitch-suppression circuitry, which improves settling time. A logic high enables glitch suppression, suppressing up to 120nV • s glitch impulse on the DAC outputs. Default is logic low (glitch suppression disabled); GLT is read/write.                                                                       |
| DT     | Digital output enable; a logic low enables DOUT. A logic high disables DOUT. Disabling DOUT reduces power consumption and digital noise feedthrough to the DAC outputs from the DOUT output buffer. Default is logic low (DOUT enabled); DT is read/write.                                                                                                                                                                                                                                                                             |
| SHDN   | Shutdown; a logic high shuts down all 32 DACs. The logic interface remains active, and the data is retained in the input and DAC registers. Read/write operations can be performed while the device is disabled; however, no changes can occur at the device outputs. A logic low powers up all 32 DACs if the device was previously in shutdown. Upon waking up, the DAC outputs return to the last stored value in the DAC registers. Default is logic low (normal operation); SHDN is read/write.                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Configuration Register

The configuration register controls the operating mode of the MAX5734, and communicates the status during a read command. Table 1 defines the settings of the configuration register.

## MAX5734 LDAC and CLR

The MAX5734 features a load DAC ( LDAC ) pin. Driving this pin low (deselecting /LDAC High on the software) causes all DAC outputs to update simultaneously.

The MAX5734 features a clear ( CLR )  pin.  Driving  this pin  low  (deselecting /CLR High on the software) sets all channels and the offset to 0V and the input and DAC registers to 0 code.

## Detailed Description of Hardware

## Reference Voltage

U2, a MAX6163 3.00V voltage reference, supplies the MAX5734's reference input (REF). To use a different voltage reference, cut the trace shorting JU7 and connect the reference to the pad labeled REF. The voltage must be between 2.90V and 3.10V. The MAX5734 EV kit  software  assumes a reference voltage of 3.00V. To

## MAX5734 Evaluation System/Evaluation Kit

change this value between 2.90V and 3.10V, enter the value into the Reference Voltage field and press enter.

## Jumper JU1

Jumper JU1 provides ground (GND) and output connections to OUT0-OUT9. Figure 3 shows the pinout.

## Jumper JU2

Jumper JU2 provides GND and output connections to OUT10-OUT20. Figure 3 shows the pinout.

## Jumper JU3

Jumper JU3 provides GND and output connections to OUT21-OUT31. Figure 3 shows the pinout.

## Jumper JU4

Connect jumper JU4 to position 1-2 to place the MAX5734 in SPI mode. Connect it to position 2-3 to place the MAX5734 in DSP mode.

## Jumper JU5

Jumper JU5 provides a location to monitor the digital signals, digital ground (DGND), and digital VDD (DVDD). Figure 3 shows the pinout. The digital signals

## Table 2. Jumper Selection

| JUMPER   | JUMPER POSITION                    | FUNCTION                                                                                          |
|----------|------------------------------------|---------------------------------------------------------------------------------------------------|
| JU1      | N/A                                | Connections for OUT0-OUT9.                                                                        |
| JU2      | N/A                                | Connections for OUT10-OUT20.                                                                      |
| JU3      | N/A                                | Connections for OUT21-OUT31.                                                                      |
| JU4      | 1-2*                               | Places the MAX5734 in SPI mode.                                                                   |
| JU4      | 2-3                                | Places the MAX5734 in DSP mode.                                                                   |
| JU5      | N/A                                | Connections for the digital signals, DGND, and DVDD.                                              |
| JU6      | Open*                              | VSS not connected to GND. Connect a negative supply voltage to VSS.                               |
| JU6      | Closed                             | VSS connected to GND.                                                                             |
| JU7      | Open                               | Drive MAX5734's reference input (REF) with an external reference voltage between 2.90V and 3.10V. |
| JU7      | Closed (shorted by PC board trace) | The MAX5734's reference input (REF) is supplied by U2 (MAX6163, 3.00V, voltage reference).        |
| JU8      | Open                               | Connect the MAX5734's ground-sense input (GS) to a remote location.                               |
| JU8      | Closed*                            | The MAX5734's ground-sense input (GS) to the GND of jumper JU2.                                   |

<!-- image -->

are chip select ( CS ), master-in slave-out (MISO), serial clock (SCK), master-out slave-in (MOSI), load DAC ( LDAC ), and clear ( CLR ).

## Jumper JU6

When evaluating the MAX5733, solder a short across JU6 to connect VSS to GND. Remove the short for the MAX5734 or MAX5735 when VSS is connected to a negative supply voltage.

## Jumper JU7

Jumper JU7 connects the MAX5734's reference input (REF) to the onboard, MAX6163, 3.00V, voltage reference (U2). To use a different voltage reference between 2.90V and 3.10V, cut the short across JU7 and apply the reference voltage to the pads labeled REF and GND.

## Jumper JU8

Jumper JU8 connects the MAX5734's ground-sense input (GS) to the GND of jumper JU2. To sense ground at  a  different  location,  remove  the  shunt  on  JU8  and connect a wire from the pad label GS to that location.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

Figure 1. Maxim Evaluation Kit Serial Interface Form

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2. MAX5734 Evaluation Kit Main Form

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

Figure 3. DAC and Digital Signal Connections

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5734 Evaluation System/Evaluation Kit

<!-- image -->

Figure 4. MAX5734 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

Figure 5. MAX5734 EV Kit Schematic-Voltage Reference, GND Connection, and Digital Signal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5734 Evaluation System/Evaluation Kit

<!-- image -->

Figure 6. MAX5734 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

Figure 7. MAX5734 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5734 Evaluation System/Evaluation Kit

<!-- image -->

Figure 8. MAX5734 EV Kit PCB Layout-Ground Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

Figure 9. MAX5734 EV Kit PCB Layout-Power Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5734 Evaluation System/Evaluation Kit

<!-- image -->

Figure 10. MAX5734 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5734 Evaluation System/Evaluation Kit

Figure 11. MAX5734 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 11-15

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

<!-- image -->