<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

## General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX125/MAX126 evaluation systems (EV systems) consist of a MAX125/MAX126 evaluation kit (EV kit) and a Maxim 68HC16MOD-16WIDE microcontroller (µC) module. The MAX125/MAX126 are high-speed, 8-channel, 14-bit data-acquisition systems with four simultaneous track/holds. Windows 3.1™/Windows 95™ software provides a handy user interface to exercise the MAX125/MAX126's features.

Order the complete EV system for comprehensive evaluation of the MAX125/MAX126 with a personal computer. Order the EV kit if you have already purchased the µC module (68HC16MOD-16WIDE) with another Maxim EV system or if you desire custom use in other µCbased systems.

## Stand-Alone EV Kits

The MAX125/MAX126 EV kits provide a proven PC board layout to facilitate evaluation of the MAX125/ MAX126. The EV kits must be interfaced to appropriate timing signals for proper operation. Apply dual power supplies (±8V min, ±20V max) to connector P1, pin 5 (P1-5), and P1-9, with ground at P1-1. Connect the active-low read strobe to P1-38, the write strobe to P1-37, the chip selects to P1-35, and the convert-start signal to P1-36 (Table 1 and Figure 1). Refer to the MAX125/MAX126 data sheet for timing requirements.

## EV Systems

The MAX125/MAX126 EV systems operate from a usersupplied +13V to +20V DC power supply. Windows 3.1/Windows 95 software running on an IBM PC interfaces to the EV system board through the computer's serial-communications port. The software can be operated with or without a mouse. Refer to the Quick Start section for setup and operating instructions.

## Table 1. Power-Supply and Timing Signal Connections

| PIN   | POWER SUPPLY SIGNAL              |
|-------|----------------------------------|
| P1-1  | AVX Ground                       |
| P1-5  | AVX Positive Supply, +8V to +20V |
| P1-9  | AVX Negative Supply, -8V to -20V |
| P1-35 | AVX Chip Select                  |
| P1-36 | AVX Convert-Start                |
| P1-37 | AVX Write Strobe                 |
| P1-38 | AVX Read Strobe                  |

Windows 3.1 and Windows 95 are trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

- ' Proven PC Board Layout
- ' Complete Evaluation System Samples to 40ksps
- ' Convenient Test Points Provided On Board
- ' Data-Logging Software with FFT Capability
- ' Fully Assembled and Tested

## Ordering Information*

| PART         | TEMP. RANGE   | INTERFACE TYPE   |
|--------------|---------------|------------------|
| MAX125 EVKIT | 0°C to +70°C  | User Supplied    |
| MAX125EVB16  | 0°C to +70°C  | Windows Software |
| MAX126 EVKIT | 0°C to +70°C  | User Supplied    |
| MAX126EVB16  | 0°C to +70°C  | Windows Software |

## MAX125EVB16 System Component List

| PART             |   QTY | DESCRIPTION                                     |
|------------------|-------|-------------------------------------------------|
| MAX125EVKIT      |     1 | MAX125 evaluation kit                           |
| 68HC16MOD-16WIDE |     1 | 68HC16 µC module with 16-bit parallel interface |

## MAX126EVB16 System Component List

| PART             |   QTY | DESCRIPTION                                     |
|------------------|-------|-------------------------------------------------|
| MAX126EVKIT      |     1 | MAX126 evaluation kit                           |
| 68HC16MOD-16WIDE |     1 | 68HC16 µC module with 16-bit parallel interface |

1

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

## MAX125EVKIT/MAX126EVKIT Component List

| DESIGNATION                 |   QTY | DESCRIPTION                          |
|-----------------------------|-------|--------------------------------------|
| C1, C2, C4, C5, C6, C9, C10 |     7 | 0.1µF ceramic capacitors             |
| C3, C8                      |     2 | 10µF, 25V tantalum capacitors        |
| C7                          |     1 | 4.7µF, 6.3V tantalum capacitor       |
| C11                         |     1 | 100pF ceramic capacitor              |
| P1, P2                      |     2 | 2x20 right-angle connectors          |
| R1, R6                      |     2 | 100 Ω , 1% resistors                 |
| R2-R5                       |     4 | 10k Ω , 5% resistors                 |
| R7, R8                      |     2 | 10 Ω , 5% resistors                  |
| U1                          |     1 | Maxim MAX125 or MAX126               |
| U2                          |     1 | 78L05 voltage regulator              |
| U3                          |     1 | 74HCT244                             |
| U4                          |     1 | 79L05 negative-voltage regulator     |
| U5                          |     1 | 16MHz clock-oscillator module        |
| None                        |     1 | PC board                             |
| None                        |     1 | Software disk: MAX125 Evaluation Kit |

## List of Files in MAX125 EV Kit

| FILE        | FUNCTION                                 |
|-------------|------------------------------------------|
| INSTALL.EXE | Installs EV kit files onto your computer |
| MAX125.EXE  | Application program                      |
| MAX125.HLP  | Help file                                |
| KIT125.B16  | Loads software into the 68HC16 µC        |
| MAX125.INI  | Program settings                         |
| UNINST.EXE  | Removes EV kit files from your computer  |

## Quick Start

## Recommended Equipment

You will need the following equipment before you begin:

- A small DC power supply (+13V to +20V DC at 250mA)
- An IBM PC-compatible computer capable of running Windows 3.1 or Windows 95
- A spare serial-communications port, preferably a 9-pin plug
- A serial cable to connect the computer's serial port to the Maxim 68HC16MOD-16WIDE module

## Connections and Setup

Perform the following steps to evaluate the MAX125 or MAX126:

- 1) Carefully connect the boards by aligning the two 40-pin headers of the MAX125/MAX126 EV kit with the two 40-pin connectors of the 68HC16MOD16WIDE module. Gently press them together. The two boards should be flush against each other.
- 2) Connect a +13V to +20V DC power source to the µC module at the terminal block (J2) next to the on/off switch, along the top edge of the µC module. Observe the polarity marked on the board.
- 3) Connect a cable from the computer's serial port to the µC module. With a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 4) Install the EV kit software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied, and icons are created for them in the Windows 3.1 program manager (or the Windows 95 Start menu). The EV kit software evaluates both the MAX125 and the MAX126.
- 5) Start  the  program by opening its icon in the program manager (or Start menu).
- 6) The program prompts you to connect the µC module and turn its power on. Slide SW1 to the on position. Select the correct serial port and click OK. The program automatically downloads KIT125.B16 to the module. The default device setting is for the MAX125. If using the MAX126, select 'MAX126' in the device characteristics dialog box and click on 'apply.'

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

- 7) Apply  input  signals  to  the  inputs  labeled CH1A-CH4A at the bottom edge of the MAX125/ MAX126 EV kit board. Observe the readout on the screen.

## Detailed Description of Software

The MAX125/MAX126 digitize up to four inputs from either  the  A  or  the  B  input  bank.  Conversion  time  is determined by the number of enabled inputs. The software collects samples at a maximum throughput of 40ksps (one channel) and 26ksps (four channels). The various program functions are grouped into dialog boxes, which are accessible from the Window menu on the main menu bar.

## Keyboard Navigation

If a mouse or other pointing device is not available, use the following keyboard shortcuts (Table 2):

- Press ALT+W to display the Window menu, and then select a tool window.
- Press the TAB key to select controls within the selected tool window.
- Activate buttons by pressing the spacebar.
- Use the up/down arrow keys for check boxes, radio buttons, and combo boxes.

## Scan Tool

You can automatically take readings at regular intervals up to 10 samples per second from user-selected channels by selecting Scan Tool from the Window menu. The 'Channel Selection and Configuration' group controls which channels will be scanned. The 'Bipolar and Differential'  controls  are  disabled  because the MAX125/MAX126's transfer function is bipolar.

The 'Scan Rate' combo box controls the rate at which measurements are made. Readings are displayed in the 'Recent Values' text area.

Table 2. Keyboard-Navigation Shortcuts

| KEY             | FUNCTION                                               |
|-----------------|--------------------------------------------------------|
| TAB             | Selects next control                                   |
| ALT+W           | Window menu                                            |
| ALT+space       | System menu of main program window                     |
| ALT+minus       | System menu of child window                            |
| Spacebar        | Clicks on the selected button                          |
| ALT+PrintScreen | Copies the image of the main window onto the clipboard |

<!-- image -->

You may optionally record readings into a data-log file. Click on the 'New Log' button to begin or end data logging. The 'Log File Format' dialog box is displayed. One complete line of data is written after all enabled channels have been sampled. The first line of the log file  contains  the  column  headings. Each subsequent line contains all enabled channels, separated by commas, tabs, or spaces (previously selected in the 'Log File  Format' dialog box). Once a log file has been opened, it can be paused or resumed with the corresponding Log menu commands. The program continues to write data to the log file until the 'Stop Log' button is clicked.

## One-Shot Read Tool

The 'One-Shot Read Tool' allows direct control of the analog-to-digital converter (ADC) configuration. Select the channel and mode of operation to update the 'Control Byte' display. Or, change the 'Control Byte' bits  directly  and  observe  the  change  in  the  'Channel Selection' control. The 'Read Now' button writes the configuration information to the ADC and performs one reading.

## Power Cycling Tool

To reduce average supply current demand, the MAX125/MAX126 can be shut down between conversions.  From the Window menu, select 'Power Cycling Tool.'  The  amount of power saved depends primarily on how long the part is off between conversions. Conversion accuracy depends on the power-up delay, reference capacitor, and time in power-down. Adjust the off-time with the 'Delay Between Samples' command. Adjust the on-time with the 'Power-Up Delay' command.

Using an adequate power-up delay ensures that the desired conversion accuracy is achieved during powercycling modes. The reference must be allowed enough time to stabilize before the measurement is performed. Start  with  zero  power-up delay, and increase the delay time until no further change in accuracy is observed. The power-up delay requirement depends on the value of the reference capacitor and the off-time (delay between samples).

The MAX125/MAX126 EV kit software performs powerup by writing a configuration word with the shutdown bit cleared. After power-up, the power-up delay is executed to allow time for the reference voltage to stabilize so that an accurate measurement can be performed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

## Sampling Tool

To sample data at rates up to 40ksps, select 'Sampling Tool' from the Window menu, make your selections, and click on the Start button. Adjust the timing delays as appropriate to control the sample rate. Estimate the effective sample rate by taking the reciprocal of the sum of the delay between samples, the power-up delay, and the conversion time. Sample size is restricted  to  a  power  of  two  so  that  the  'Fast  Fourier Transform' (FFT) tool can process the data. 'Sample Size' controls the number of samples collected on each selected channel. After the samples have been collected, the data is automatically uploaded to the host and graphed. Once displayed, the data can optionally be saved to a file.

## FFT Tool

The EV software includes an FFT tool that can display the spectral content of data collected with the highspeed sampling tool.

To view the spectral content of a waveform, first select a data sample that was previously collected with the 'Sampling Tool.' Then select 'FFT Tool' from the Window menu. Check the output plots desired and click on the Start button.

A data-windowing function preprocesses the data sample before performing an FFT. 1) When the input signal is not synchronized to the sampling clock, spectral energy appears to leak into nearby frequency buckets. A suitable data window tapers the raw data to zero amplitude at the beginning and end, reducing this spectral leakage.

## Device Characteristics

The 'Device Characteristics' dialog box contains parameters that are not expected to change often. The device selection is used to select between the MAX125 and the MAX126.

## Evaluating the MAX126

The MAX125 software can evaluate the MAX126 directly.  From  the  Window menu, select 'Device Characteristics.'  Next,  change  the  device  type  from  MAX125 to MAX126. This tells the program that the input voltage span is ±VREF instead of ±2VREF.

## Changing the Reference Voltage

The EV kit software assumes a 2.5V reference voltage, unless otherwise specified. Apply an external 2.5V reference to the REFIN pad to overdrive the internal reference. See the MAX125/MAX126 data sheet for more information. From the Window menu, select 'Device Characteristics.' Next, type the new reference voltage into the 'Reference Voltage' edit box.

## Detailed Description of Hardware

The ADC (U1) is an 8-channel, 14-bit data-acquisition system with four simultaneous track/holds. Linear regulators U2 and U4 provide clean analog ±5V power supplies for the ADC. R8 and C1 filter digital noise out of the analog power supply. U3 isolates the CS , RD , WR , and CONVST signals from the main system bus to further  prevent digital  noise  from  entering  the  ADC.  R7 and C11 filter the TTL clock oscillator to prevent overshoot at the CLK input.

The MAX125/MAX126's chip-select ( CS )  is  memorymapped to location 7E000 on the 68HC16 module. This location is used for writing configuration bytes and reading data. The convert-start ( CONVST ) signal is also memory-mapped and is asserted for one memoryaccess  cycle  when  memory  location  7E800  is accessed. The MAX125/MAX126's interrupt ( INT )  output triggers an interrupt on the 68HC16 through the input capture vector.

## Measuring Supply Current

To monitor supply current, measure the voltage across resistor R1 (for the +5V supply) or R6 (for the -5V supply).  These resistors are 100 Ω ±1%, so every 1mV across R1 or R6 represents 10µA of supply current.

## Table 3. Troubleshooting Guide

| PROBLEM                                                                                    | CORRECTIVE ACTIONS                                                                                                                                                                                                                             |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| No output measurement. System seems to report zero voltage or fails to make a measurement. | • Check the +5V and -5V sup- ply voltages. • Check the 2.5V REFOUT ref- erence voltage using a digi- tal voltmeter. • Use an oscilloscope to verify that the 16MHz clock is run- ning and that the conver- sion-start signal is being strobed. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

Figure 1.  MAX125 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

Figure 2.  MAX125/MAX126 EV Kit Component Placement Guide

<!-- image -->

6

Figure 3.  MAX125/MAX126 EV Kit PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

<!-- image -->

Figure 4.  MAX125/MAX126 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX125/MAX126 Evaluation Systems/Evaluation Kits

Evaluate:  MAX125/MAX126 NOTES

8

| DESIGNATION     |   QTY | DESCRIPTION                                                |
|-----------------|-------|------------------------------------------------------------|
| C1              |     1 | 10µF, 25V electrolytic capacitor                           |
| C2, C8-C12, C14 |     7 | 0.1µF ceramic capacitors                                   |
| C3              |     1 | 1µF ceramic capacitor                                      |
| C4, C5          |     2 | 22µF, 25V electrolytic capacitors                          |
| C6, C7          |     2 | 22pF ceramic capacitors                                    |
| C13             |     1 | 100µF, 25V electrolytic capacitor                          |
| D1              |     1 | 1N4001 diode                                               |
| D2              |     1 | 1N4742A 12V, 1W zener diode                                |
| J2              |     1 | 2-circuit terminal block                                   |
| J3              |     1 | Right-angle printed circuit board mount, DB9 female socket |
| LED1            |     1 | Light-emitting diode                                       |
| P1, P2          |     2 | 40-pin right-angle male connectors                         |
| R1              |     1 | 10M Ω , 5% resistor                                        |
| R2              |     1 | 330k Ω , 5% resistor                                       |
| R3, R4          |     2 | 10k Ω , 5% resistors                                       |
| R5              |     1 | 470 Ω , 5% resistor                                        |
| R6              |     1 | 10k Ω , SIP resistor                                       |
| R7              |     1 | 100 Ω , 5% resistor                                        |

## General Description

The 68HC16MOD-16WIDE module is an assembled and tested printed-circuit board intended for use with Maxim's high-speed evaluation kits (EV kits). The module uses a full 16-bit implementation of Motorola's MC68HC16Z1 microcontroller (µC). It requires an IBMcompatible personal computer and an external DC power supply, typically 12V or as specified in the EV kit manual.

Maxim's 68HC16MOD-16WIDE module allows customers to evaluate selected Maxim products. It is not intended to be used as a microprocessor development platform, and such use is not supported by Maxim.

QSPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

<!-- image -->

## 68HC16MOD-16WIDE

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| SW1           |     1 | Slide switch                                                            |
| SW2           |     1 | Momentary pushbutton switch                                             |
| U1            |     1 | 68HC16 microcontroller MC68HC16Z1CFC16 (132-pin plastic quad flat pack) |
| U2            |     1 | Maxim MAX233CPP                                                         |
| U3            |     1 | 27C256 EPROM containing monitor program                                 |
| U3            |     1 | 28-pin socket                                                           |
| U4            |     1 | 7805 regulator, TO-220 size                                             |
| U4            |     1 | Heatsink, thermalloy # 6078                                             |
| U5, U8        |     2 | 62256 (32K x 8) static RAMs                                             |
| U6, U9        |     2 | 74HCT245 bidirectional buffers                                          |
| U6, U9        |     2 | 20-pin sockets                                                          |
| U7            |     1 | Maxim MAX707CPA                                                         |
| U10           |     1 | Maxim ICL7662CPA                                                        |
| Y1            |     1 | 32.768kHz watch crystal                                                 |
| None          |     4 | Rubber feet                                                             |
| None          |     1 | 5" x 5" printed circuit board                                           |

## Detailed Description

## Power Input Connector J2

The 68HC16MOD-16WIDE module draws its power from a user-supplied power source connected to terminal block J2. Be sure to note the positive and negative markings on the board. A three-terminal 5V regulator allows input voltages between 8V and an absolute maximum of 20V. The 68HC16MOD-16WIDE module typically requires 200mA of input current.

## 68HC16 Microcontroller

U1 is Motorola's 68HC16Z1 µC. Contact Motorola for µC information, development, and support. Maxim EV kits may use the 16-bit wide bus or use the high-speed queued serial peripheral interface (QSPI™) and the internal chip-select generation.

A MAX707 on the module (U7) monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## 68HC16MOD-16WIDE

The 68HC16MOD-16WIDE module uses a phase-locked l oop  (PLL) to set its bus speed. Crystal Y1 is a 32.768kHz frequency reference. The internal oscillator runs 256 times faster than the external crystal. When the 68HC16MOD-16WIDE module is reset, it waits for the PLL to lock before it executes any software. After the PLL locks onto the reference frequency, the software doubles the clock speed by writing to the clock synthesizer  control  register,  selecting  a  bus  speed  of 16.78MHz.

U5 and U8, the user RAM area, are 32kbyte CMOS static RAMs.

The 74HCT245 octal buffers let the 68HC16MOD16WIDE module access a 16-bit port on the interface connectors. This memory-mapped port consists of separate read and write strobes, four chip selects, four address LSBs, and sixteen data bits.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straightthrough DB9 male-to-female cable to connect J3 to this port. If the only available serial port has a 25-pin connector, you may use a standard 25-pin to 9-pin adapter. Table 1 shows the pinout of J3.

The MAX233 is an RS-232 interface voltage level-shifter with two transmitters and two receivers. It includes a built-in charge pump with internal capacitors that generates the output voltages necessary to drive RS-232 lines.

## 40-Pin Connectors P1 and P2

The 20 x 2 pin headers (P1 and P2) connect the 68HC16MOD-16WIDE module to a Maxim EV kit. Table 2 lists the function of each pin.

## Address Ranges

The 68HC16 µC generates various enable signals for different address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (P1-33 to P1-36) are available on the data connector to be used by Maxim EV kits. Table 3 outlines the address ranges for each of the elements found on the 68HC16MOD-16WIDE module, and Table 4 is a truth table that describes the logic for each of the module's chip-select outputs. Because the addresses are not completely decoded, the boot ROM and has a shadow at address 08000 hex.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1.  Serial Communications Port J3

|   PIN | NAME   | FUNCTION                                                   |
|-------|--------|------------------------------------------------------------|
|     1 | DCD    | Handshake; hard-wired to DTR and DSR                       |
|     2 | RXD    | RS-232-compatible data output from 68HC16MOD-16WIDE module |
|     3 | TXD    | RS-232-compatible data input to 68HC16MOD-16WIDE module    |
|     4 | DTR    | Handshake; hard-wired to DCD and DSR                       |
|     5 | GND    | Signal ground connection                                   |
|     6 | DSR    | Handshake; hard-wired to DCD and DTR                       |
|     7 | RTS    | Handshake; hard-wired to CTS                               |
|     8 | CTS    | Handshake; hard-wired to RTS                               |
|     9 | None   | Unused                                                     |

## Boot ROM

The boot ROM, U3, is configured as an 8-bit memory device. Resistor R4 pulls data bit 0 low during system reset, forcing the µC to fetch instructions using only the upper eight data bits. The boot ROM checks the system and waits for commands from the host. Refer to the EV kit manual for specific start-up procedures.

## Software

All  software is supplied on a disk with the EV kit. Instructions for operating the software are included in the EV kit manual. Refer to the EV kit manual for more information.

Use the 68HC16MOD-16WIDE module only with those EV kits that are designed to support it, and only download code that is targeted for the 68HC16MOD-16WIDE module. Downloading incorrect object code into the 68HC16MOD-16WIDE module will have unpredictable results.

<!-- image -->

## Self Check

The 68HC16MOD-16WIDE module includes a self-diagnostic routine, which checks the power supply, microprocessor, RAM, and ROM, independent of the EV kit or computer. Note that it does not exercise the RS-232 port or the EV kit 80-pin interface. Connect the power supply to the power terminals (J2) and slide the power switch SW1 to the 'ON' position. The LED will light up, and will flash within 5 seconds.

If the LED flashes with a 50% duty cycle, then the module passed its self check.

Table 2.  P1 and P2 Data-Connector Signals

| HEADER   | PIN   | NAME    | 68HC16-16WIDE MODULE FUNCTION                               |
|----------|-------|---------|-------------------------------------------------------------|
| P1       | 1, 4  | GND     | Ground return                                               |
|          | 5, 6  | VPREREG | +12V from wall cube                                         |
|          | 7, 8  | +5V     | +5V from 78M05                                              |
|          | 9, 10 | -12V    | -12V from ICL7662 (typically -8V at 15mA load)              |
|          | 11    | PCS2    | QSPI peripheral chip select 2                               |
|          | 12    | PCS3    | QSPI peripheral chip select 3                               |
|          | 13    | PCS0/SS | QSPI peripheral chip select 0                               |
|          | 14    | PCS1    | QSPI peripheral chip select 1                               |
|          | 15    | MOSI    | QSPI Master Output, Slave Input                             |
|          | 16    | SCK     | QSPI Serial Clock                                           |
|          | 17    | -       | Not used                                                    |
|          | 18    | MISO    | QSPI Master Input, Slave Output                             |
|          | 19    | IC2     | General purpose I/O; Input Capture 2; can be used as an IRQ |
|          | 20    | IC1     | General purpose I/O; Input Capture 1; can be used as an IRQ |
|          | 21    | OC1     | General purpose I/O; Output Compare 1                       |
|          | 22    | IC3     | General purpose I/O; Input Capture 3; can be used as an IRQ |
|          | 23    | -       | Not used                                                    |
|          | 24    | OC2     | General purpose I/O; Output Compare 2                       |
|          | 25    | OC4     | General purpose I/O; Output Compare 4                       |
|          | 26    | OC3     | General purpose I/O; Output Compare 3                       |
|          | 27    | PAI     | Pulse Accumulator Input                                     |
|          | 28    | IC4     | General purpose I/O; Input Capture 4; can be used as an IRQ |
|          | 29    | PWMB    | Pulse-Width Modulator B output (drives the status LED)      |
|          | 30    | PWMA    | Pulse-Width Modulator A output                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16MOD-16WIDE

If  the  LED  flashes  with  a  10%-on/90%-off  duty  cycle, then the module failed its self check. Most likely, one of the RAM chips (U5 or U8) is bad.

If the LED remains on and does not flash, then the problem is either U3 (the EPROM), U1 (the microprocessor), U4 (the regulator), the MAX707 reset generator, or the power supply. Use a voltmeter to verify that the power supplies are good; check the power-supply input and the +5V output from the regulator. Use an oscilloscope to see if the 32.768kHz reference oscillator is running.

## 68HC16MOD-16WIDE

Table 2.  P1 and P2 Data-Connector Signals (continued)

| HEADER   | PIN    | NAME       | 68HC16-16WIDE MODULE FUNCTION          |
|----------|--------|------------|----------------------------------------|
| P1       | 31     | -          | Not used                               |
| P1       | 32     | PCLK       | Pulse Accumulator Clock Input          |
| P1       | 33     | CS10/7F800 | Chip select strobe for I/O area $7F800 |
| P1       | 34     | CS9/7F000  | Chip select strobe for I/O area $7F000 |
| P1       | 35     | CS7/7E000  | Chip select strobe for I/O area $7E000 |
| P1       | 36     | CS8/7E800  | Chip select strobe for I/O area $7E800 |
| P1       | 37     | CS5/WRIO   | Active low write strobe for I/O area   |
| P1       | 38     | CS1/RDIO   | Active low read strobe for I/O area    |
| P1       | 39, 40 | -          | Not used                               |
| P2       | 1      | EXTD0      | External I/O data bus LSB              |
| P2       | 2-15   | EXTD1-14   | External I/O data bus                  |
| P2       | 16     | EXTD15     | External I/O data bus MSB              |
| P2       | 17, 18 | -          | Not used                               |
| P2       | 19     | A01        | Word address LSB                       |
| P2       | 20     | A02        | Word address                           |
| P2       | 21     | A03        | Word address                           |
| P2       | 22     | A04        | Word address                           |
| P2       | 23-40  | -          | Not used                               |

Table 3.  Memory Map (all address values are in 20-bit hex)

PIN

00000-07FFF

08000-0FFFF

10000-1FFFF

20000-203FF

20400-7DFFF

7E000-7E7FF

7E800-7EFFF

7F000-7F7FF

7F800-7FFFF

80000-F7FFF

FUNCTION

Boot ROM (U3, strobed by CSBOOT)

Shadow of boot ROM

User RAM (U5 and U8, strobed by CS0

and CS2)

Internal standby RAM; 1kbyte

Unused

External chip select (P1 pin 35) (CS7)

External chip select (P1 pin 36) (CS8)

External chip select (P1 pin 34) (CS9)

External chip select (P1 pin 33) (CS10)

Not accessed by the 68HC16

| PIN         | FUNCTION                                      |
|-------------|-----------------------------------------------|
| F8000-FF6FF | Unused                                        |
| FF700-FF73F | 68HC16's built-in ADC (not used)              |
| FF740-FF8FF | Unused                                        |
| FF900-FF93F | General-purpose timer module (GPT)            |
| FF940-FF9FF | Unused                                        |
| FFA00-FFA7F | System integration module (SIM)               |
| FFA80-FFAFF | Unused                                        |
| FFB00-FFB07 | Internal standby RAM (SRAM) control registers |
| FFB08-FFBFF | Unused                                        |
| FFC00-FFDFF | Queued serial module (QSM)                    |
| FFE00-FFFFF | Unused                                        |

Figure 1.  68HC16MOD-16WIDE Module Schematic

| ADDRESS RANGE   | CSBOOT   | CS0   | CS1   | CS2   | CS5   | CS6   | CS7   | CS8   | CS9   | CS10   |
|-----------------|----------|-------|-------|-------|-------|-------|-------|-------|-------|--------|
| 0xxxx read      | L        | H     | H     | H     | H     | H     | H     | H     | H     | H      |
| 1xxxx read      | H        | H     | H     | L     | H     | H     | H     | H     | H     | H      |
| 1xxxx write     | H        | L     | H     | H     | H     | H     | H     | H     | H     | H      |
| 7E0xx read      | H        | H     | L     | H     | H     | L     | L     | H     | H     | H      |
| 7E0xx write     | H        | H     | H     | H     | L     | L     | L     | H     | H     | H      |
| 7E8xx read      | H        | H     | L     | H     | H     | L     | H     | L     | H     | H      |
| 7E8xx write     | H        | H     | H     | H     | L     | L     | H     | L     | H     | H      |
| 7F0xx read      | H        | H     | L     | H     | H     | L     | H     | H     | L     | H      |
| 7F0xx write     | H        | H     | H     | H     | L     | L     | H     | H     | L     | H      |
| 7F8xx read      | H        | H     | L     | H     | H     | L     | H     | H     | H     | L      |
| 7F8xx write     | H        | H     | H     | H     | L     | L     | H     | H     | H     | L      |

Table 4.  Chip-Select Outputs Truth Table

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  68HC16MOD-16WIDE Module Schematic (continued)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. 68HC16MOD-16WIDE Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16MOD-16WIDE

Figure 2.  68HC16MOD-16WIDE Module Component Placement Guide

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16MOD-16WIDE

<!-- image -->

Figure 3.  68HC16MOD-16WIDE Module PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16MOD-16WIDE

Figure 4.  68HC16MOD-16WIDE Module PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## NOTES

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16MOD-16WIDE

11

## 68HC16MOD-16WIDE

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600