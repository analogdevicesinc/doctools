<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

## General Description

The MAX5893/MAX5894/MAX5895 evaluation kits (EV kits)  are  fully  assembled and tested circuit boards that contain all the components necessary to evaluate the performance of this family of interpolating and modulating dual digital-to-analog converters (DACs). The EV kit boards include circuitry that converts the DAC differential output currents to single-ended voltages. The EV kits also include circuitry that generates a clock signal from an AC sine-wave input signal.

The included evaluation software runs under Windows ® 98/2000/XP, providing a graphical user interface (GUI) to exercise the features of the MAX5893/MAX5894/ MAX5895 through the use of an SPI™ interface.

The MAX5893/MAX5894/MAX5895 EV kits provide a proven PC board layout to facilitate evaluation of the MAX5893/MAX5894/MAX5895. The EV kits must be interfaced to appropriate timing signals for proper operation. When using the EV kits without the CMOD232 command module, connect the system-side power (VMOD), groundreturn (GND), and interface (SCLK, CS, DIN, DOUT) signals to the pads on the PC board (see Figure 5). Refer to the MAX5895 data sheet for timing requirements.

The MAX5895 evaluation software runs under Windows 98/2000/XP on an IBM PC, interfacing to the EV system board (CMOD232) through the computer's serial communications port. See the Quick Start section for setup and operating instructions.

Order the complete EV system for comprehensive evaluation of the MAX5893/MAX5894/MAX5895 using a personal computer. Order the EV kit if the command module has already been purchased with another Maxim EV system, or for custom use in other microcontroller (µC)-based systems.

The MAX5893/MAX5894/MAX5895 EV kits can be used to  evaluate the MAX5893 (12-bit), MAX5894 (14-bit), and the MAX5895 (16-bit) digital-to-analog converters. See the Ordering Information table for  instructions  on how to order the EV kit (and EV system) with these devices preinstalled.

Windows is a registered trademark of Microsoft Corp.

SPI is a trademark of Motorola, Inc.

## MAX5893/MAX5894/MAX5895 EV Kit Files

| PROGRAM      | DESCRIPTION                              |
|--------------|------------------------------------------|
| INSTALL.EXE  | Installs the EV kit software             |
| MAX5895.EXE  | Application program                      |
| HELPFILE.HTM | MAX5893/MAX5894/MAX5895 EV kit help file |
| UNINST.INI   | Uninstalls the EV kit software           |

- ♦ Proven PC Board Layout
- ♦ SPI 4-Wire Serial Interface
- ♦ On-Board Reference Circuitry
- ♦ On-Board Reset Circuitry
- ♦ Assembled and Tested
- ♦ Include Windows 98/2000/XP-Compatible Software

## Ordering Information

| PART                  | TEMP RANGE * IC PACKAGE   | SPI INTERFACE TYPE        |
|-----------------------|---------------------------|---------------------------|
| 0°C to +70°C          | 68 QFN                    | MAX5893EVKIT Not included |
| 0°C to +70°C          | 68 QFN                    | MAX5393EVCMOD2 CMOD232    |
| 0°C to +70°C          | 68 QFN                    | MAX5894EVKIT Not included |
| 0°C to +70°C          | 68 QFN                    | MAX5894EVCMOD2 CMOD232    |
| 0°C to +70°C          | 68 QFN                    | MAX5895EVKIT Not included |
| MAX5895EVCMOD2 0°C to | +70°C 68 QFN              | CMOD232                   |

* EV kit PC board temperature range only. Note: The MAX5895 EV kit software is provided with the MAX5893/MAX5894/MAX5895 EV kits and can be used to evaluate all three parts. The CMOD232 board is required to interface the EV kit to the computer when using the included software.

## Common Component List

| DESIGNATION                      |   QTY | DESCRIPTION                                                        |
|----------------------------------|-------|--------------------------------------------------------------------|
| C1-C5                            |     5 | 220µF ±20%, 6.3V tantalum capacitors (C-case) AVX TPSC227M006R0250 |
| C6-C10                           |     0 | Not installed (C-case)                                             |
| C11-C15                          |     5 | 10µF ±20%, 10V X5R ceramic capacitors (1210) TDK C3225X5R1A106M    |
| C16-C20, C37-C40, C48            |    10 | 1.0µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M  |
| C21-C32, C34, C35, C36, C49, C50 |    17 | 0.1µF ±20%, 16V X7R ceramic capacitors (0306) TDK C0816X7R1C104M   |
| C41, C42                         |     2 | 0.1µF ±20%, 10V X7R ceramic capacitors (0402) TDK C1005X7R1A104M   |
| C43-C46                          |     0 | Not installed (0603)                                               |
| C47                              |     0 | Not installed (0402)                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

## Common Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R15           |     1 | 100k Ω ±1% resistor (0603)                                   |
| SW1           |     1 | Momentary pushbutton switch (NO)                             |
| T1, T2        |     2 | 1:1 RF balun transformers Coilcraft TTWB3010-1               |
| T3, T4, T5    |     3 | RF transformers Mini-Circuits ADTL1-12                       |
| U1            |     1 | Note: See the EV Kit Specific Component List                 |
| U2            |     1 | Maxim MAX6161AESA (8-pin SO) or Maxim MAX6161BESA (8-pin SO) |
| U3            |     1 | Maxim MAX6392KA29 (SOT23-8) top mark = AAHV                  |
| U4, U5        |     2 | Maxim MAX1840EUB (10-pin µMAX®)                              |
| None          |     3 | Shunts                                                       |
| None          |     1 | MAX5895 PC board                                             |
| None          |     1 | Software disk (CD-ROM) MAX5895 EV kit                        |

## Component Suppliers

| SUPPLIER      | PHONE        | FAX          | WEBSITE               |
|---------------|--------------|--------------|-----------------------|
| AVX           | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| CoilCraft     | 847-639-6400 | 847-639-1469 | www.coilcraft.com     |
| IRC           | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Mini-Circuits | 718-934-4500 | 718-934-7092 | www.minicircuits.com  |
| TDK           | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX5893/MAX5894/MAX5895 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

| DESIGNATION                |   QTY | DESCRIPTION                                                          |
|----------------------------|-------|----------------------------------------------------------------------|
| J1                         |     1 | 2 x 20 right-angle female connector                                  |
| J2, J3                     |     2 | Dual-row, right-angle, 40-pin headers                                |
| JU3, JU4                   |     2 | Jumpers, 2-pin headers                                               |
| L1-L5                      |     5 | Ferrite bead cores (0805) Fair-Rite 2508051217Z0                     |
| OUTI, OUTQ, CLK, DATACLK   |     4 | SMA PC-mount connectors                                              |
| OUTIN, OUTIP, OUTQN, OUTQP |     0 | Not installed                                                        |
| R1-R4                      |     4 | 49.9 Ω ±0.1% resistors (0603) IRC PFC-W0603R-03-49R9-B or equivalent |
| R5                         |     1 | 2k Ω ±0.1% resistor (0603)                                           |
| R6, R7                     |     2 | 24.9 Ω ±1.0% resistors (0603)                                        |
| R8, R9                     |     2 | 100 Ω ±0.1% resistors (0603)                                         |
| R10-R13                    |     0 | Not installed (0603)                                                 |
| R14                        |     1 | 174k Ω ±1% resistor (0603)                                           |

## EV Kit Specific Component List

| EV KIT PART NUMBER   | DESIGNATION   | DESCRIPTION                               |
|----------------------|---------------|-------------------------------------------|
| MAX5895EVKIT         | U1            | Maxim MAX5895EGK (68-pin QFN 10mm x 10mm) |
| MAX5894EVKIT         | U1            | Maxim MAX5894EGK (68-pin QFN 10mm x 10mm) |
| MAX5893EVKIT         | U1            | Maxim MAX5893EGK (68-pin QFN 10mm x 10mm) |

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

## Quick Start

## Recommended Equipment

- Maxim MAX5895EVCMOD2 (contains MAX5895 EV kit board and CMOD232 module)
- DC power supply, 9VDC at 200mA (included with CMOD232 module)
- Computer running Windows 98, 2000, or XP with a spare serial (COM) port
- Standard 9-pin, straight-through ,  male-to-female cable (serial extension cable) to connect the computer's  serial  port  to  the  Maxim  command module interface board (use Mouser part number 172-0906 or equivalent)
- Two DC power supplies, 1.8V at 750mA
- Three DC power supplies, 3.3V at 200mA
- Signal generator with low phase noise and low jitter for clock input signal (e.g., HP 8662A, HP 8644B)
- One digital data generator
- One spectrum analyzer

## EV Kit Setup

- 6) Verify that shunts are installed in the following locations:

JU3 (installed) → On-board reference enabled

- JU4 (installed) → On-board reference enabled
- 7) Connect a 1.8V DC power supply to the AVDD1.8 and GND pads.
- 8) Connect a 1.8V DC power supply to the DVDD1.8 and GND pads.
- 9) Connect a 3.3V DC power supply to the AVDD3.3 and GND pads.
- 10) Connect a 3.3V DC power supply to the DVDD3.3 and GND pads.
- 11) Connect a 3.3V DC power supply to the AVCLK and GND pads.
- 12) Connect the clock signal generator to the EV kit SMA connector labeled CLK.
- 13) Connect the digital data generator to headers J2 and J3 (see the CMOS Input Data section for connection details).
- 14) Connect the EV kit SMA connector labeled DATACLK to the data generator synchronization input.
- 15) Connect the OUTI or OUTQ connector to the spectrum analyzer.
- 16) Carefully align the 40-pin connector (J1) of the MAX5893/MAX5894/MAX5895 EV kits with the 40-pin header (P4) of the CMOD232 interface board. Gently press them together.
- 17) Plug the CMOD232 wall cube into an electrical outlet.
- 18) Turn on all of the DC power supplies.
- 19) Start the MAX5895 program by opening its icon in the Start menu.
- 20) Normal device operation can be verified by the 'Status: MAX5895 Operational' text in the Interface box.

## Detailed Description of Software

## Main Window

The evaluation software's main window (Figure 1) consists of an Interface diagnostic box, the MAX5895 Control Tabs, and some system level controls.

The Interface box indicates the current Device Type , the Register Address , and the Data Sent/Received for the last read/write operation. Change the SPI SCLK frequency through the SPI Clock Frequency drop-down box.

While the MAX5895 supports a maximum 10MHz SPI clock frequency, the CMOD232 interface board is limited

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The MAX5893/MAX5894/MAX5895 EV kits are fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

## Command Module Setup

- 1) Disable the pullup resistors on the command module by setting both switches (SW1) to the OFF position.
- 2) Set the command module working voltage to 5.0V by placing a shunt across pins 2-3 of the VDD select jumper (J1).
- 3) Connect a cable from the computer's serial port to the command module (CMOD232) interface board. Use a straight-through 9-pin male-to-female cable. To avoid damaging the EV kit or your computer, do not use a 9-pin null-modem cable or any other proprietary  interface  cable  that  is  physically  similar  to the straight-through cable.
- 4) Connect the provided wall-cube power supply to the CMOD232 board.

## EV Kit Software Setup

- 5) The MAX5895.EXE software program can be run from the CD-ROM or hard drive. Use the INSTALL.EXE program to copy the files and create icons in the Windows 98/2000/XP Start menu.

<!-- image -->

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

to 4MHz. To connect a faster SPI interface board to the EV kit, see the Using the Alternative SPI Interface section.

The MAX5895 EV kit software continuously polls the MAX5893/MAX5894/MAX5895 to make sure that the two boards have not become inadvertently disconnected. An undesired result of this polling is constant activity  on  the  SPI  bus.  This  feature may make it difficult to monitor the SPI bus for desired bit patterns. Disable this feature by checking the Silence SPI Bus Activity checkbox.

Return the EV kit to its power-on-reset state by clicking the POR Reset button.

## IDAC Tab

The IDAC tab (Figure 1) configures the IDAC settings of the MAX5895. Adjust the Coarse and Fine gain by moving the sliders in the IDAC Gain box. For more precise control, enter the desired integer number in the edit box below each slider. Adjust the offset current and Offset Direction in the IDAC Offset box. Power down the IDAC by checking the IDAC Power Down checkbox.

## QDAC Tab

The QDAC tab (Figure 2) configures the QDAC settings of  the  MAX5895. Adjust the Coarse and Fine gain by moving the sliders in the QDAC Gain box. For more precise control, enter the desired integer number in the edit  box  below each slider. Adjust the offset current and Offset Direction in  the QDAC Offset box. Power down the QDAC by checking the QDAC Power Down checkbox.

## Configuration Tab

The Configuration tab (Figure 3) configures the miscellaneous settings of the MAX5895. Select the desired Latch Edge , Data Format ,  and Interleave settings under the Digital Input Data controls. Select the desired Interpolation Rate , Modulation Mode , Modulation Sign , Mixer Mode ,  and Filter Configuration under the Interpolators controls. Select the data clock I/O pin and Data Clock Output Enable under the Clock section.

Note: DATACLK/B14 is only available during interleaved operation. Refer to the MAX5895 data sheet for details regarding these functions.

## Simple SPI Commands

There are two methods for communicating with the MAX5893/MAX5894/MAX5895: through the normal user-interface panel or through the SPI commands available by selecting the 3-Wire Interface Diagnostic item from the Options pulldown menu.

The SPI dialog boxes accept numeric data in hexadecimal format only. Hexadecimal numbers should be prefixed by '0x'. See Figure 4 for an example of this tool.

## Detailed Description of Hardware

The  MAX5893/MAX5894/MAX5895  EV  kits  are designed to simplify the evaluation of the MAX5893/ MAX5894/ MAX5895 dual 12-/14-/16-bit, 500Msps, interpolating and modulating current-output DACs. The MAX5893/MAX5894/MAX5895 operate with CMOScompatible data inputs, a differential clock input signal, an internal 1.2V reference voltage, and 1.8V/3.3V power supplies for simple board operation.

The MAX5893/MAX5894/MAX5895 EV kits provide a header connector to easily interface with a pattern generator, circuitry that converts the differential current outputs to single-ended voltage signals, and circuitry to convert a user-supplied single-ended clock signal to a differential clock signal required by the MAX5895. The EV kit  circuit  includes  multiple  options  for  supplying  a reference voltage to the DAC.

## Power Supplies

The MAX5893/MAX5894/MAX5895 EV kits operate from 1.8V and 3.3V power supplies; however, two 1.8V power supplies and three 3.3V power supplies are recommended for optimum dynamic performance.

The EV kit board ground layout is divided into three sections: digital, analog, and clock. Using separate power supplies for each section reduces crosstalk and noise, and improves the integrity of the output signal.

## CMOS Input Data

The MAX5893/MAX5894/MAX5895 EV kits provide two 0.1in, 2 x 20 headers (J2 and J3) to interface a 32-bit CMOS pattern generator to the EV kit. The header data pins are labeled on the board with their appropriate data bit designation. Table 1 details header connections for J2 and J3. Use the labels on the EV kit or Table 1 to match the data bits from the pattern generator to the corresponding data pins on headers J2 and J3.

## Clock Signal

The MAX5893/MAX5894/MAX5895 require a differential clock input signal with minimal jitter. The MAX5893/ MAX5894/MAX5895 EV kits feature single-ended-to-differential conversion circuitry. Supply a single-ended clock signal at the CLK SMA connector. The clock signal applied to the SMA should have a minimum amplitude of 10dBm when measured at the connector. Insertion loss due to the interconnecting cables decreases the amount of  power seen at the EV kit input. Account for this loss when setting the signal-generator amplitude.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 1. MAX5895 EV Kit Software Main Window (IDAC Tab)

<!-- image -->

Figure 2. MAX5895 EV Kit Software Main Window (QDAC Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 3. MAX5895 EV Kit Software Main Window (Configuration Tab)

<!-- image -->

Figure 4. The above example shows a simple SPI transfer operation using the included 3-Wire Interface Diagnostics. In this example, the software is writing data (0x01h) to register address 0x05h. This sets the IDAC coarse gain to 1.

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Table 1. Digital Input Signals

| PIN   | SIGNAL NAME I-CHANNEL   | SIGNAL NAME I-CHANNEL   | SIGNAL NAME I-CHANNEL   | PIN   | SIGNAL NAME Q-CHANNEL   | SIGNAL NAME Q-CHANNEL   | SIGNAL NAME Q-CHANNEL   |
|-------|-------------------------|-------------------------|-------------------------|-------|-------------------------|-------------------------|-------------------------|
| PIN   | MAX5893                 | MAX5894                 | MAX5895                 | PIN   | MAX5893                 | MAX5894                 | MAX5895                 |
| J2-39 | ID11                    | ID13                    | ID15                    | J2-7  | SELIQ/QD11              | SELIQ/QD13              | SELIQ/QD15              |
| J2-37 | ID10                    | ID12                    | ID14                    | J2-5  | DATACLK/QD1             | DATACLK/QD1             | DATACLK/QD1             |
| J2-35 | ID9                     | ID11                    | ID13                    | J2-3  | QD9                     | QD11                    | QD13                    |
| J2-33 | ID8                     | ID10                    | ID12                    | J2-1  | QD8                     | QD10                    | QD12                    |
| J2-31 | ID7                     | ID9                     | ID11                    | J3-39 | QD7                     | QD9                     | QD11                    |
| J2-29 | ID6                     | ID8                     | ID10                    | J3-37 | QD6                     | QD8                     | QD10                    |
| J2-27 | ID5                     | ID7                     | ID9                     | J3-35 | QD5                     | QD7                     | QD9                     |
| J2-25 | ID4                     | ID6                     | ID8                     | J3-33 | QD4                     | QD6                     | QD8                     |
| J2-23 | ID3                     | ID5                     | ID7                     | J3-31 | QD3                     | QD5                     | QD7                     |
| J2-21 | ID2                     | ID4                     | ID6                     | J3-29 | QD2                     | QD4                     | QD6                     |
| J2-19 | ID1                     | ID3                     | ID5                     | J3-27 | QD1                     | QD3                     | QD5                     |
| J2-17 | ID0                     | ID2                     | ID4                     | J3-25 | QD0                     | QD2                     | QD4                     |
| J2-15 | -                       | ID1                     | ID3                     | J3-23 | -                       | QD1                     | QD3                     |
| J2-13 | -                       | ID0                     | ID2                     | J3-21 | -                       | QD0                     | QD2                     |
| J2-11 | -                       | -                       | ID1                     | J3-19 | -                       | -                       | QD1                     |
| J2-9  | -                       | -                       | ID0                     | J3-17 | -                       | -                       | QD0                     |

Note: Pins J3-15, J3-13, J3-9, J3-7, J3-5, J3-3, and J3-1 are not connected. All other pins are connected to GND. Italicized signal names indicate the default EV kit configuration.

## Reference Voltage Options

The MAX5893/MAX5894/MAX5895 require a reference voltage to set the full-scale analog output current. The DACs contain a stable on-chip bandgap reference of 1.2V that is used by default. The internal reference can be overdriven by an external reference to enhance accuracy and drift performance or for gain control.

The MAX5893/MAX5894/MAX5895 EV kits feature multiple reference options. Use the MAX5895 on-chip voltage reference by removing the shunts from jumpers JU3 and JU4. Use an external reference by removing the shunts from jumpers JU3 and JU4 and connecting a stable voltage reference at the REFIO pad. Install shunts on jumpers JU3 and JU4 to use the on-board reference (MAX6161). See Table 2 to configure the shunts across jumpers JU3 and JU4 and select the source of the reference voltage.

## Full-Scale Current

The MAX5893/MAX5894/MAX5895 require an external resistor to set the full-scale output current. The full-scale current is set to 20mA with resistor R5 (2.0k Ω ). Replace resistor R5 to adjust the full-scale output current. Refer to  the Reference Input/Output section in the MAX5895 data sheet to select different values for resistor R5.

Table 2. Reference Voltage Selection (JU3, JU4)

| SHUNT POSITIONS   | VOLTAGE REFERENCE MODE                                                        |
|-------------------|-------------------------------------------------------------------------------|
| Installed         | External 1.25V reference (U2) connected to MAX5893/MAX5894/MAX5895 REFIO pin. |
| Not installed     | MAX5893/MAX5894/MAX5895 internal 1.2V bandgap reference.                      |
| Not installed     | User-supplied voltage reference at the REFIO pad (0.125V to 1.25V).           |

## Differential Output

The MAX5893/MAX5894/MAX5895 complementary current outputs are terminated into a differential 50 Ω resistance to generate a voltage signal with a 1VP-P differential amplitude. The positive and negative output signals of  the  differential  signal  can be measured at the OUTIP/OUTIN and OUTQP/OUTQN probe locations. The differential signal is converted into a 50 Ω singleended signal with transformers T1 and T2 and can be measured at the OUTI/OUTQ SMA connectors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

## Reset Circuitry

The MAX5893/MAX5894/MAX5895 EV kits feature onboard  reset  circuitry  that  places  the  MAX5893/ MAX5894/MAX5895 SPI registers in their default state after power-up. After power-up, the registers can be manually reset by pressing switch SW1. If  this  button is pressed, click the POR Reset button on the MAX5895 EV kit software to synchronize the GUI with the hardware.

## Using an Alternative SPI Interface

The MAX5893/MAX5894/MAX5895 EV kits provide pads that allow an alternative SPI-compatible interface to be

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

used. Connect the CMOS-compatible interface through the CS, DIN, DOUT, SCLK, and GND pads. The interface is connected to level translators that automatically translate the interface voltages to  the  MAX5893/ MAX5894/MAX5895 system voltages. Apply the positive rail  for  the  input  side  of  the  translators to the VMOD pad. Use the GND pad adjacent to DVDD3.3 as the ground reference.

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 5a. MAX5895 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 5b. MAX5894 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

<!-- image -->

Figure 5c. MAX5893 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 5d. MAX5893/MAX5894/MAX5895 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

<!-- image -->

Figure 6. MAX5893/MAX5894/MAX5895 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 7. MAX5893/MAX5894/MAX5895 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 8. MAX5893/MAX5894/MAX5895 EV Kit PC Board Layout (Inner Layer 2)-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 9. MAX5893/MAX5894/MAX5895 EV Kit PC Board Layout (Inner Layer 3)-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 10. MAX5893/MAX5894/MAX5895 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5893/MAX5894/MAX5895 Evaluation Systems/Evaluation Kits

Figure 11. MAX5893/MAX5894/MAX5895 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

18

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600