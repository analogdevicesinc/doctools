<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX186 Evaluation System/Evaluation Kit

## General Description

The MAX186 evaluation system (EV system) consists of a MAX186 evaluation kit (EV kit) connected to a Maxim 80C32 microcontroller (µC) module. The unit connects to an IBM-compatible personal computer running software provided with the MAX186 EV kit. Both boards come fully assembled and tested.

Using the EV system, the MAX186 input multiplexer can be software-configured in a variety of single-ended or differential modes with unipolar or bipolar input ranges. The MAX186 can be evaluated with a VSS voltage of 0V or -5V, selectable from the personal computer's keyboard.

The EV system is also useful for evaluating the MAX186's shutdown feature. The MAX186 can be operated in three states of readiness between conversions.  There are provisions for monitoring the supply current in the different shutdown states, and for varying the delay between conversions.

Order the EV system (MAX186EVSYS-DIP) for comprehensive evaluation of the MAX186 or MAX188 using a personal computer. Order the EV kit (MAX186EVKIT-DIP) if  the  80C32 module (80C32MODULE-DIP) has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems. The MAX186 EV kit  can also perform limited evaluation on a stand-alone basis (see the MAX186 EV Kit Quick Start section).

## Features

- ♦ Includes EV Kit and 80C32 µ C Module
- ♦ 12-Bit Resolution ADC
- ♦ Serial µ C Interface
- ♦ Unipolar +4.096V or Bipolar -2.048V to +2.048V Input Ranges
- ♦ Internal Reference Voltage
- ♦ Low Supply-Current Shutdown Mode
- ♦ Evaluates All Operating Modes
- ♦ Proven PCB Layout
- ♦ Prototyping Area Provided
- ♦ Digitizes 8 Analog Inputs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TEMP RANGE   | BOARD TYPE   |
|-----------------|--------------|--------------|
| MAX186EVSYS-DIP | 0°C to +70°C | Through-Hole |
| MAX186EVKIT-DIP | 0°C to +70°C | Through-Hole |
| 80C32MODULE-DIP | 0°C to +70°C | Through-Hole |

## EV System

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX186 Evaluation System/Evaluation Kit

## EV System Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX186 evaluation kit (MAX186EVKIT-DIP) |
|     1 | 80C32 µC module (80C32MODULE-DIP)       |

## MAX186 EV System Quick Start

The MAX186 EV system includes a Maxim 80C32 module and a MAX186 EV kit. The two connect through a 40-pin data connector on adjoining edges of the boards. The EV system then connects to an IBM-compatible computer running software provided with the MAX186 EV kit.

The personal computer and the 80C32 module are connected via a standard RS-232 serial communication port. If the serial port on the personal computer has the standard 9-pin connector, a straight through cable is used to attach the board. Systems with a 25-pin serial port connector need an adapter or adapter cable (D25 female to D9 male). Both the adapter and the cable are available at most computer supply stores.

The steps for using the MAX186 EV system are outlined as follows:

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).
- 2) Install the MAX186 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start | Programs menu.
- 3) Connect the MAX186 evaluation board to the 40-pin data connector on the Maxim 80C32 module.
- 4) Connect an 8V to 16V source to the 2-pin power connector on the 80C32 module. The positive lead connects to the terminal marked VIN.
- 5) Connect a cable from the personal computer serial connector to the 9-pin RS-232 connector on the 80C32 module.
- 6) Turn on the power to the 80C32 module. The switch is located on one edge of the board. The LED indicates power from the on-board regulator.
- 7) Start  the  MAX186 program by opening its icon in the Windows Start | Programs menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## EV Kit Component List

| DESIGNATION        |   QTY | DESCRIPTION                                     |
|--------------------|-------|-------------------------------------------------|
| C1, C2, C3, C4, C8 |     5 | 10µF 16V radial electrolytic capacitors         |
| C6*                |     1 | 22µF low-ESR radial electrolytic capacitor      |
| C5, C7, C9, C10    |     4 | 0.1µF ceramic capacitors                        |
| C11-C18            |     8 | 0.01µF ceramic capacitors                       |
| R1-R8              |     8 | 300 Ω 5% resistors                              |
| R9*                |     1 | 10k Ω 9-resistor SIP                            |
| U1                 |     1 | Maxim MAX186DCPP                                |
| U2                 |     1 | Maxim ICL7660CPA                                |
| U3                 |     1 | Maxim DG413DJ                                   |
| J1                 |     1 | Female 40-pin data connector                    |
| None               |     1 | 20-pin IC socket for U1                         |
| H1                 |     1 | 8-pin header                                    |
| None               |     1 | 3.00in x 3.75in PCB                             |
| None               |     4 | Rubber feet                                     |
| None               |     1 | MAX186 EV kit software on a 5 1/4in floppy disk |
| None               |     1 | MAX186 data sheet                               |
| None               |     1 | MAX186 EV kit manual                            |

*C6 and R9 are supplied with the kit but not mounted on the PCB.

- 8) The 80C32 will transmit a logon message and RAM test  results  when communications are initialized. The MAX186 RAM resident program will then be automatically downloaded.
- 9) Connect the analog inputs to the CH0-CH7 pads and observe the readout on the screen.

## MAX186 EV Kit Quick Start

This section applies only to use of the MAX186EVKITDIP without the 80C32 module.

The MAX186 evaluation board can easily be configured in  the  quick-look  circuit  of  Figure  5  of  the  MAX186/ MAX188 data sheet. All of the necessary digital pins are provided on the 8-pin header located along the bottom edge of the board. Each pin function is indicated by labels below the header.

<!-- image -->

## MAX186 Evaluation System/Evaluation Kit

- 1) Solder the 10-pin SIP resistor, provided with the kit, in the R9 location on the EV kit board. The SIP resistors act as pull-ups for the digital signals connected to the 8-pin header. The marked end of R9 is pin 1.
- 2) Connect +5V and ground (GND) to the appropriately labeled pads on the evaluation board.
- 3) To operate the MAX186 in single-supply mode, ground the header pin marked VSEL. Leaving the pin open sets the MAX186 VSS pin to -5V (dual-supply operation).
- 4) Connect a clock signal (0.1MHz to 0.4MHz*) to the header pin, labeled SCLK.
- 5) Ground the header pin, labeled CS .
- 6) Connect an analog input source to the channel 7 input pad, labeled CH7.
- 7) Connect an oscilloscope, as shown in Figure 5 of the MAX186/MAX188 data sheet.
* To run at clock frequencies up to 2MHz, an external compensation capacitor must be connected to the VREF pin. Install the 22µF capacitor supplied with the kit  in  location  C6,  and  cut  the  trace  across  jumper JU2 to disable the MAX186 internal compensation.

## Detailed Description

## VSS Circuit

An ICL7660 +5V to -5V converter and a DG413 analog switch (mounted on the MAX186 evaluation board) provide the means to switch the MAX186's VSS voltage between ground and -5V. The analog switch is not required for most application circuits because the VSS voltage will be fixed at either -5V or ground. A negative VSS supply is required only when the MAX186's input is expected to go below ground.

The ICL7660 provides a -5V source with minimal additional  circuitry.  The  ICL7660  converter circuit  on  the MAX186 EV kit is the standard circuit for +5V to -5V conversion. Its 10mA output capacity is much more than is needed by the MAX186, which requires only 50µA. The additional current is available for user circuits  in  the  prototyping  area.  For  applications  where the MAX186 is the only load, the 10µF capacitors may be reduced to 0.1µF.

<!-- image -->

## Table 1. Port 1 Bit Functions

| BIT   | NAME     | FUNCTION                                                                                                       |
|-------|----------|----------------------------------------------------------------------------------------------------------------|
| P1.0  | V SS SEL | V SS select switches the MAX186 V SS pin between ground and -5V. Logic low, V SS = 0V; logic high, V SS = -5V. |
| P1.1  | SCLK     | Serial clock for data transfer                                                                                 |
| P1.2  | SHDN     | Drives the MAX186 SHDN pin. Cut jumper JU2 to float the SHDN pin.                                              |
| P1.3  | -        | Not used                                                                                                       |
| P1.4  | SSTRB    | MAX186 SSTRB pin. Provides the busy output during internal clock mode (see MAX186/MAX188 data sheet).          |
| P1.5  | DOUT     | MAX186 DOUT pin. Transfers conver- sion data from the MAX186 to the 80C32.                                     |
| P1.6  | CS       | MAX186 CS pin. Enables serial com- munications with the MAX186.                                                |
| P1.7  | DIN      | MAX186 DIN pin. Transfers data from the 80C32 to the MAX186.                                                   |

## Serial Interface

The 80C32 and MAX186 communicate through the 8 bits of port 1 on the 80C32. Table 1 lists the function of each bit. The 80C32 drives MAX186 input data on the DIN bit and receives data from the MAX186 on the DOUT bit. For the first eight clock cycles after chipselect ( CS )  goes low, DIN data is clocked into the MAX186 on the rising edge of the serial clock (SCLK) signal. For the 12 data-output clock cycles, the MAX186 updates DOUT data on the falling edge of SCLK. See the MAX186 data sheet for complete information concerning the serial interface; Figures 6-12 of the  MAX186/MAX188 data sheet are timing diagrams for operating in the internal and external clock modes. Note that the maximum conversion rate of the EV system is limited to 5ksps, because of the speed limitation of  the  80C32. For evaluation at full speed, see the MAX186 EV Kit Quick Start section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

The MAX186 digital signals are available on the 8-pin header located on the bottom edge of the board. This header provides convenient connections for scope probes or a ribbon cable.

## Conversion Cycles

The MAX186 performs conversions on demand or at preset intervals. The conversion sequence does not vary with the two methods. If the device is in shutdown mode, a dummy conversion brings it out of shutdown, and the program delays to allow the reference voltage to settle. Then, as many as eight conversions are performed to collect data for a complete line of the screen display. Finally, if  shutdown mode is enabled, another dummy conversion returns the MAX186 to the proper shutdown state.

## Shutdown Mode

The MAX186 has two shutdown levels. The FULL shutdown mode completely disables the MAX186 reference circuit  and  reduces supply current to 2µA. A delay of 300µs is required to activate from this shutdown state. The delay must be greater when the external reference compensation capacitor, C6, is installed. Be sure to set the reference settling delay whenever the FULL shutdown mode is used. Table 5 of the MAX186/MAX188 data sheet lists the reference settling times required for different external capacitors.

The second shutdown level disables only the reference output buffer. This drops the supply current to 30µA, but requires a shorter delay (5µs with internal compensation) between activation and conversion cycles. This is referred to as the FAST shutdown mode.

On the MAX186 evaluation board, the SHDN pin (P1.2), is  programmed high so that it always enables the MAX186 in normal operation. All modes are controlled through software. In FAST or FULL shutdown mode, the MAX186 is placed in shutdown between conversion cycles and activated just before the conversions begin. This reduces the average supply current but will require  a  delay  before  the  conversions.  The MAX186EVKIT Personal Computer Program section has information on varying the delay and controlling the shutdown mode.

Jumper JU2 is in series with the SHDN pin of the MAX186. Opening this jumper floats the SHDN pin, disabling the internal compensation of the reference buffer.  The external compensation capacitor, C6, is supplied with the kit but not mounted on the PCB. If you wish to use external compensation, cut the trace across JU2 and mount the 22µF capacitor, C6. The reference settling  delay  must be increased. See the MAX186/ MAX188 data sheet for descriptions of internal and external reference compensation.

## Evaluating External Reference Voltages

The MAX186 can be operated with an external reference voltage if the internal reference is disabled. Connecting the REFADJ pin to VDD will disable the internal reference. Soldering a short piece of wire across jumper JU3 will make this connection. The 22µF capacitor should also be soldered into location C6 when using an external voltage. The reference voltage is then applied to the pad labeled VREF.

To use the MAX188, which requires an external reference, install  C6 and connect the reference source to the VREF pad.

Jumper JU1 facilitates monitoring the MAX186 supply current in the shutdown modes. The jumper allows the insertion of a current meter in series with the MAX186 VDD supply. To monitor the current, cut the printed circuit trace between the two holes marked JU1. Then solder two short leads in each hole and connect the ammeter.  A  short  piece  of  wire  can  be  soldered across the jumper location to restore normal connections.

## Analog Inputs

Each of the eight inputs has a 300 Ω resistor in series. These optional resistors were included as current-limiting devices for input overvoltage conditions. There is also an optional 0.01µF capacitor on each of the inputs. This provides the low source impedance required when the channel is the low side of a differential input pair. The input capacitors are not required on channels used as single-ended inputs. Refer to the Pseudo-Differential Input section of the data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX186 Evaluation System/Evaluation Kit

## Reference Adjustment

The MAX186 software assumes a reference voltage of 4.096V. This value is used for calculating the displayed results after each conversion. The value can be altered to reflect the exact reference voltage of the MAX186 or to scale the displayed readings. Changing the indicated value does not alter the MAX186's reference voltage.

The MAX186's internal 4.096V reference voltage can be adjusted over a ±1.5% range by adding resistors R10 through R13, shown on the schematic. Refer to the MAX186 data sheet for detailed information about the reference voltage.

## Description of Software

The evaluation software's main window controls the active control word bits, serial clock speed, and sample rate. It  displays  the  voltage  and  output  code for each active channel, as well as some statistics of the input signal. A separate graph window shows the data changing in real time. The update rate is limited to about 10 samples per second due to COM port bandwidth limitations.

## Controls

The control word is divided into several fields. To change the active control word, drop down the appropriate field's combo box and select the desired option.

## Statistics

The Minimum and Maximum fields show the highest and lowest readings acquired. The Average field shows a running mean based on the equation ai = (k)(xi) + (1 - k) (ai-1).  The Clear button resets the statistics. To remove offset errors, first apply 0V to the active input channel, clear statistics, acquire some samples, and then check Tare .  This average offset voltage will now be subtracted from all subsequent measurements.

## Sampling

Choose the desired sampling rate (QSPI Clock), sampling size ( Sample! menu item), click Begin Sampling! (in Sample! pop-up window). Sample size is restricted to a power of 2 to permit FFT processing once the data is saved to a file. After the samples have been collected, the data is automatically uploaded to the host and is graphed. Once displayed, the data can optionally be saved to a file.

<!-- image -->

## Saving Graphs to Disk

Data in the real-time graph and in sampled data graphs may be saved to a file. Only the raw output codes are saved, but voltages may be inferred, based on the reference voltage and the maximum code value.

## Scanning All Channels

To scan through all channels, select SCAN from the INPUT menu.

## Reference Voltage

The evaluation software assumes a 4.096V reference voltage, unless otherwise specified. Refer to the MAX186 IC data sheet for more information. To override this value, type the new reference voltage into the Vref edit box and click the Set Vref button.

## RAM Resident Program

The 186RAM.MAX program is an 80C32 program that is transferred from disk to the static RAM on the 80C32 module. It receives conversion commands from the 186EVKIT program running on the personal computer, controls the conversion cycle, and returns the results. Its operation is transparent to the user.

## EPROM Resident Program

In  addition to the two programs supplied with the MAX186 EV kit, a small 80C32 bootstrap program is stored in the EPROM located on the 80C32 board. The EPROM resident program initializes the 80C32, establishes communications over the RS-232 link, checks the static  RAM, and downloads the 186RAM program. Its operation starts on power-up and whenever the reset button is pressed. It transmits an identification banner after receiving the first character and then tests the onboard static RAM.

The last operation performed by the EPROM resident program is downloading the 186RAM program and storing  it  in  the  static  RAM.  Once  the  program  is  fully loaded, control of the 80C32 is transferred to the RAM resident 186RAM program.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

Figure 1. MAX186 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2. MAX186 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

Figure 3. MAX186 EV Kit Component-Side Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

<!-- image -->

Figure 4. MAX186 EV Kit Solder-Side Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

## 80C32 Module

## 80C32 Module General Description

The Maxim 80C32 microcontroller (µC) module is intended for use with this and other Maxim evaluation kits  (EV  kits).  It  contains  the  80C32  µC,  RS-232  interface, 8kbytes of EPROM, 32kbytes of static RAM, and address decoding logic. A 40-pin connector mates with a connector found on Maxim EV kits designed to interface with the 80C32 module.

## 80C32 Module Component List

| DESIGNATION                           |   QTY | DESCRIPTION                               |
|---------------------------------------|-------|-------------------------------------------|
| C1, C2                                |     2 | 15pF ceramic capacitors                   |
| C4, C5, C6, C7, C8, C9, C10, C11, C12 |     9 | 0.1µF, 50V ceramic capacitors             |
| C3, C13, C14                          |     3 | 22µF, 16V radial electrolytic capacitors  |
| D1                                    |     1 | 1N4001 diode                              |
| J1                                    |     1 | 40-pin right-angle male connector         |
| J2                                    |     1 | DB9 right-angle socket                    |
| R1                                    |     1 | 620 Ω resistor                            |
| RS1                                   |     1 | 10k Ω 10-pin, 9-resistor SIP              |
| SW1                                   |     1 | Power switch                              |
| SW2                                   |     1 | Reset switch                              |
| IC1                                   |     1 | 80C32                                     |
| IC2                                   |     1 | MAX233CPP                                 |
| IC3                                   |     1 | 27C64                                     |
| IC4                                   |     1 | 74HCT573                                  |
| IC5                                   |     1 | 74HCT139                                  |
| IC6                                   |     1 | 74HCT08                                   |
| IC7                                   |     1 | 74HCT245                                  |
| IC8                                   |     1 | 62256                                     |
| IC9                                   |     1 | 78M05                                     |
| IC10                                  |     1 | MAX707CPA                                 |
| Y1                                    |     1 | 11.059MHz crystal                         |
| None                                  |     1 | 2-pin power connector                     |
| None                                  |     1 | 28-pin 600-mil socket for IC3 (the EPROM) |
| None                                  |     4 | Rubber feet                               |
| None                                  |     1 | 3.00in x 5.50in PCB                       |

The module is connected to an IBM-compatible personal computer over a serial communications port. Software provided with each EV kit runs on the computer and controls the unit consisting of the 80C32 module and EV kit. The program uses a routine stored in the 27C64 EPROM to download special 80C32 code for each kit. The downloaded code controls the EV kit and, together with the program running on the personal computer, displays the output data.

The board operates from a single 8V to 22V supply. Both the pre-regulated and regulated +5V levels are available to the EV kit through the 40-pin connector.

## 80C32 Module Power Supply

The Maxim 80C32 module requires an input of 8V to 22V for normal operation. An on-board 78M05 power regulator supplies the 5V required for the logic on the module, and any 5V requirements for the EV kit attached to the 40-pin connector. The pre-regulated voltage is also available on the data connector. The source must be capable of supplying 100mA for the module and meeting the load requirements of the EV kit.

## Microprocessor Supervisor

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed. A watchdog function was not included because they frequently interfere while debugging programs, and debugging is a prime function of this board.

## 80C32 Microcontroller

The 80C32 is a member of the popular Intel 8051 family of  µCs.  It  is  a  low-power  CMOS  version  that  requires external ROM for program storage, 256 bytes of internal RAM, and four 8-bit I/O ports. Three of the ports are required by the system for serial communications and memory control. The fourth port (P1) is available through the data connector.

The 80C32 communicates with the PC over a serial RS232 link. A MAX233 acts as a level shifter between the ±15V RS-232 signals and the TTL levels of the 80C32.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX186 Evaluation System/Evaluation Kit

The MAX233 also generates the output voltages necessary to drive RS-232 lines.

Port 0 (pins 32-39) of the 80C32 multiplexes the lower eight bits of memory address and the eight bits of read/write data. The lower eight bits of address data are latched during each I/O cycle by the 74HCT573 octal latch. The latch is controlled by the address latch enable (ALE) signal of the 80C32. Port 2 (pins 21-28) of the 80C32 supplies the upper eight bits of address information.

The port 3 pins (10-17) provide several unrelated functions.  Pins  10  and  11  are  used  as  the  receive  data (RxD) and transmit data (TxD) pins of the RS-232 link. Pins 16 and 17 act as the write ( WR ) and read ( RD ) control signals for the data I/O cycles. Four other pins are configured as interrupt and timer controls, but are not used on this board.

## Memory

The board has a 27C64 EPROM containing code for initializing  the  80C32  and downloading additional program code to the 62256 RAM. After a reset, the EPROM resident code initializes the 80C32, determines the address range of the RAM, sets the RS-232 baud rate to  1200,  and waits for communications from the PC. Receiving any character will prompt the program to send an initial banner that includes the program name, revision level, and boundaries of the on-board RAM.

The 62256 CMOS (32kbyte) static RAM is used to hold program code for the various Maxim EV kits that use the 80C32 module as the controller. Programs are transferred from disk to the RAM using software running on a personal computer, such as MAXLOAD or other programs provided with Maxim EV kits. Programs written  to  execute  from  this  RAM  start  at  4000  (HEX) and are typically less than 4kbytes long. The remaining RAM is available for data storage.

<!-- image -->

## Address Ranges

Logic on the module board generates various enable signals for different address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (CS0-CS3) are available on the data connector to be used by Maxim EV kits. Table 1 outlines the address range for each of the elements found on the 80C32 module.

## Table 1. Address Ranges in Hexadecimal

| ADDRESS RANGE (HEX)   | ENABLE SIGNAL   |
|-----------------------|-----------------|
| 0000 ➔ 3FFF           | ROM             |
| 4000 ➔ BFFF           | RAM             |
| C000 ➔ CFFF           | CS0             |
| D000 ➔ DFFF           | CS1             |
| E000 ➔ EFFF           | CS2             |
| F000 ➔ FFFF           | CS3             |

## Data I/O Connector

A 40-pin connector mounted on the edge of the PCB provides connection between the µC module and other Maxim EV kits. Both power and digital signals are transferred via the connector. To join the module board with an EV kit, carefully align and insert the pins on the connector with the mating 40-pin female connector of the kit. The pin functions are listed in Table 2.

Table 2. I/O Connector Pin Functions

| PIN   | FUNCTION            | DESCRIPTION              |
|-------|---------------------|--------------------------|
| 1-4   | Ground              |                          |
| 5, 6  | Pre-regulator input |                          |
| 7, 8  | Regulated +5V       |                          |
| 9     | RD                  | Read strobe              |
| 10    | WR                  | Write strobe             |
| 11    | CS0                 | Address C000-CFFF        |
| 12    | CS1                 | Address D000-DFFF        |
| 13    | CS2                 | Address E000-EFFF        |
| 14    | CS3                 | Address F000-FFFF        |
| 15-18 | ADDR0-ADDR3         | Lowest 4 bits of address |
| 19-26 | DB0-DB7             | 8-bit data bus           |
| 27-34 | P1.0-P1.7           | 8 bits of port 1         |
| 35-40 | Reserved            |                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

## Software Architecture

Software for EV kits using the Maxim 80C32 module is divided into three elements: the interface program running on an IBM-compatible PC, a module program located in EPROM, and a program supplied on disk that is transferred to the RAM located on the module.

## EPROM Resident Program

The EPROM resident program initializes the 80C32, establishes communications over the RS-232 link, verifies  the  static  RAM,  and  downloads  other  programs. Its  operation  starts  on  power-up  and  whenever  the reset button is pressed. After reset, the program waits indefinitely  to  receive  a  character  over  the  RS-232 port.  When the first  character  is  received,  a  logon banner identifying the module and firmware revision is transmitted.

Immediately following transmission of the logon banner, the program runs a checker routine for the on-board 256kbit static RAM. The RAM is filled with several patterns and then read to verify that each pattern has been retained. A pass or fail indication is displayed on the personal computer after each pass. EV kit software requires proper operation of the RAM. Do not attempt to use the board if any of the RAM checks fail.

Two other programs for the EV kits are provided on a floppy disk shipped with each kit. One program acts as the user interface and transmits commands to the 80C32 module. The other is an 80C32 application program that executes from the RAM located on the module. The procedure for loading the programs varies with each kit, so follow the instructions provided.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX186 Evaluation System/Evaluation Kit

<!-- image -->

Figure 5. 80C32 Module Component Placement Guide (x2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

Figure 6. 80C32 Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

<!-- image -->

Figure 6. 80C32 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

Figure 7. 80C32 Module Component-Side Layout (x2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX186 Evaluation System/Evaluation Kit

<!-- image -->

Figure 8. 80C32 Module Solder-Side Layout (x2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX186 Evaluation System/Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------|-----------------|
|                 0 | -               | Initial release                              | -               |
|                 1 | 1/96            | -                                            | -               |
|                 2 | 6/08            | Deleted references to obsolete DOS software. | 1, 2, 4-7       |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 18