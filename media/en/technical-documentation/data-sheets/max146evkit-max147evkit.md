<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX147 Evaluation System/Evaluation Kit

## General Description

The MAX147 evaluation system (EV system) is a complete, low-cost, 8-channel data-acquisition system consisting of a MAX147 evaluation kit (EV kit) and a Maxim 68HC16 or 80C32 microcontroller (µC) module. IBM PC-compatible software provides a handy user interface to exercise the MAX147's features. Source code is provided.

Order the EV system for comprehensive evaluation of the MAX147 using a personal computer. Order the EV kit if the 68HC16 or 80C32 µC module was purchased previously with another Maxim EV system, or for custom use in other µC-based systems.

The MAX147 EV kit evaluates both the MAX147 and the MAX146. To evaluate the MAX146, order a free sample of the MAX146BCPP along with the MAX147 EV kit.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                          |
|--------------------------|-------|--------------------------------------|
| C1, C7-C14               |     9 | 0.01µF ceramic capacitors            |
| C2, C4, C6, C15, C17-C20 |     8 | 0.1µF ceramic capacitors             |
| C3                       |     1 | 4.7µF tantalum capacitor             |
| C5                       |     1 | 10µF tantalum capacitor              |
| C16                      |     1 | 0.047µF ceramic capacitor            |
| J1                       |     1 | 2x20 right-angle socket              |
| J18                      |     1 | 10-pin header                        |
| JU1, JU2, JU5            |     3 | 2-pin jumpers                        |
| R1-R8                    |     8 | 1k Ω , 5% resistors                  |
| R9                       |     1 | 10k Ω , 5%, 10-pin SIP resistor pack |
| R10-R13                  |     0 | Open                                 |
| R14                      |     1 | 220k Ω , 5% resistor                 |
| R15                      |     1 | 180k Ω , 5% resistor                 |
| R16                      |     1 | 100k Ω trim pot                      |
| R17, R21                 |     2 | 1M Ω , 5% resistors                  |
| R18                      |     1 | 100 Ω , 5% resistor                  |
| U1                       |     1 | Maxim MAX147BCPP                     |
| U2                       |     1 | Maxim MAX872CPA                      |
| U3                       |     1 | Maxim MAX393CPE                      |
| U4                       |     1 | Maxim MAX666CPA                      |
| U5                       |     1 | Maxim MAX495CPA                      |
| U6                       |     1 | 74HCT04                              |
| U7                       |     1 | Maxim MAX494CPD                      |
| None                     |     1 | PC board                             |
| None                     |     1 | Software disk, MAX147 Evaluation Kit |

- ¤ Proven PC Board Layout
- ¤ Complete Evaluation System
- ¤ Convenient Test Points Provided On-Board
- ¤ Data-Logging Software
- ¤ Source Code Provided
- ¤ Fully Assembled and Tested

## Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX147EVKIT-DIP | 0°C to +70°C  | Through-Hole |
| MAX147EVC16-DIP | 0°C to +70°C  | Through-Hole |
| MAX147EVC32-DIP | 0°C to +70°C  | Through-Hole |

## MAX147EVC16

## System Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX147 Evaluation Kit (MAX147EVKIT-DIP) |
|     1 | 68HC16 µC Module (68HC16MODULE-DIP)     |

## MAX147EVC32

## System Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX147 Evaluation Kit (MAX147EVKIT-DIP) |
|     1 | 80C32 µC Module (80C32MODULE-DIP)       |

## MAX147 Stand-Alone EV Kit

The MAX147 EV kit provides a proven PC board layout to  facilitate  evaluation  of  the  MAX147. It must be interfaced to appropriate timing signals for proper operation. Refer to the MAX147 data sheet for timing requirements.

The MAX147 EV kit operates with either a 3V supply or a 5V supply. The EV kit's own 3V regulator is powered by a user-supplied 5V source. Trim pot R16 sets the actual 3V voltage. R16 is adjustable from approximately 2.3V to 3.6V.

If a 3V power supply is already in use, disable the onboard 3V regulator by unplugging the MAX666 from its socket. Then connect the 3V supply to the VDD input pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

Features

## MAX147 Evaluation System/Evaluation Kit

## 3V-Only Systems

For 3V systems, unplug the MAX666 regulator and connect your 3V power supply to the VDD input pad. Connect the 3V and 5V input pads to each other to power the MAX393. (The MAX393 can be powered with 3V or 5V. See Detailed Description of Hardware section.)  For  development flexibility, the EV kit uses a MAX393 to route the EXTCOM signal to COM or to the CH0 input. Obtain the 3V DOUT and SSTRB signals from the header J18, not from the 40-pin connector (3V-only systems do not require the 74HCT04 level translator).

## Systems Using 5V Logic

For 5V-logic systems, the 74HCT04 translates the MAX147's 3V outputs to 5V levels. The MAX147's input may be driven directly by 5V logic levels (obtain the 5V DOUT and SSTRB signals from the 40-pin connector). For 5V-only applications, refer to the MAX186/MAX188 analog-to-digital converters.

## MAX147 EV System

The MAX147 EV system operates from a user-supplied 9V to 20V DC power supply, from which it generates a 5V supply for the µC board. A 3V regulator supplies power to the MAX147. 3V to 5V level translators are provided to interface the MAX147 with the µC board.

## Quick Start

- 1) Copy the files from the distribution disk to your hard disk or to blank floppy disks. Make sure that the MAX147 EV kit software is in its own directory. The necessary files are in the root directory of the distribution disk, and the source code is in the SOURCE subdirectory. The SOURCE subdirectory is not required to operate the EV system.
- 2) Carefully connect the boards by aligning the MAX147 EV kit's 40-pin header with the µC module's 40-pin connector. Gently press them together, so that they are flush against one another.
- 3) Connect a 9V to 15V DC power source to the µC module at the terminal block. This is located next to the on/off switch, in the upper-right corner of the µC module. Observe the polarity marked on the board.
- 4) Connect a cable from the computer's serial port to the µC module. For a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port is selected.
- 5) Start the MAX147 software on the IBM PC by setting the current directory to match the directory containing the Maxim programs, then type the program name MAX147. Do not turn off or disconnect the µC module while the program is running; if you do, you will have to restart the program.
- 6) The program asks which µC module is in use and to which port it is connected (the default µC is the 68HC16). For the 80C32 µC module, press µC to select the 80C32. Press the space bar until the correct PC serial port is highlighted, and press ENTER. The MAX147 program is now in terminalemulation mode.
- 7) Turn on the µC module's power. The module displays its log-on banner and tests its RAM.
- 8) Download and run the RAM resident program on the µC module by pressing ALT+L (i.e., hold down the ALT key as you strike the L key). The program prompts you for the file name. Press the ENTER key to download and run the file.
- 9) Press ALT+C to switch to the control panel screen after  the  RAM resident program is successfully downloaded.
- 10) Apply input signals to the CH0-CH7 inputs at the top edge of the MAX147 EV kit board. Observe the readout on the screen. Table 3 lists the commands available from the control panel screen.
- 11) Before turning off power to the MAX147 EV kit, exit the program by pressing ALT+X.

## Evaluating the MAX146

To evaluate the MAX146, turn off power to the EV kit, remove  the  MAX147  IC,  and  replace  it  with  a MAX146BCPP. Disable the external reference by removing jumpers JU2 and JU5. Type MAX147 146 to start the software.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Software

## Shutdown Power Cycling (MAX147)

From the control panel, use the up/down arrow keys to select the power cycling mode. Power cycling puts the MAX147 in powerdown (FULLPD) mode between readings. The MAX147 is always fully powered during conversions.

## Shutdown Power Cycling (MAX146)

From the control panel, use the up/down arrow keys to select the power cycling mode. The MAX146 supports FULLPD mode as well as FASTPD mode, where the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX147 Evaluation System/Evaluation Kit

internal  1.2V  bandgap reference remains active. The MAX146 is always fully powered during conversions.

## Low-Speed Data Logging

The RS-232 serial link limits the data-logging sample rate to no more than 10sps (samples per second). The data-logging command is used to write data to a userspecified file in plain comma-spaced-value text format. From the control panel screen, press L. If a log file is not already open, the software asks for a file name. Only one log file is allowed per session. Once a log file is open, press L to toggle data logging on or off.

With data logging enabled, 'Logging' flashes on the screen. One complete line of data is written after all enabled channels are sampled.

The first  line  of  the  log  file  contains  the  column  headings.  Each subsequent line of the log file contains all eight channels, separated by commas. The values are written as raw decimal output codes or as scaled voltages, depending on which setting the control panel is currently displaying. Use the C and V commands to select the display format (Table 3). F3, the log data marker command, can be used to sequentially tag different  sections  of  the  log  file  to  indicate  a  change  in setup or input conditions. Pressing F3 writes an extra entry  at  the  end  of  the  current  line  of  the  data  log,  to indicate a change in setup or input conditions.

## High-Speed Data Sampling

The S command samples rates over 10 samples per second (sps). Data is collected from only one of the eight  channels at a rate from 100sps to 91ksps. First, select the channel by pressing one of the number keys 0-7. Next, press F to specify the name of the file into which the samples should be written. If the file already exists,  the  screen  displays  '***  file  already  exists  ***'. To begin collecting data, press B. After the samples are collected, the data is automatically uploaded to the host and stored in the sample file.

## Controlling the Sampling Rate

The rate for high-speed sampling, data logging, and the  oscilloscope demo mode (Table 3, key O) is controlled by the D (delay between samples) command.

When used with the sample or oscilloscope demo commands, specify the approximate delay in microseconds or milliseconds by typing D, then the number, then 'µsec' or 'msec'. Always verify timing by using an oscilloscope, since this delay is not linear due to code overhead. The fast  sampling screen and oscilloscope demo mode use delays from 100µs to 1000µs. The 68HC16 software supports delays between 68µs and 1000ms. The 80C32 software supports delays between 450µs and 70ms.

<!-- image -->

When used with the slower data-logging command, specify the delay in seconds. The delay is between enabled channels, and one line of data is logged after all enabled channels have been polled.

## COM Voltage

COM is connected to ground (default) or to a usersupplied analog common voltage applied to the EXTCOM input pad. Press F6 to select the desired COM connection.

The EV kit software can measure a user-applied COM voltage. When F4 is pressed from the control panel screen (Table 3), the software connects the EXTCOM input pad to input channel 0. Next, the software connects COM to ground. The channel 0 voltage is measured in single-ended unipolar mode. The measurement is performed several times and averaged. After measuring the external COM pad voltage, the switches are restored to their previous configuration.

## Operating with QSPI, 24 Bits per Transfer

The EV kit software program KIT147.S19 loaded into the 68HC16 module uses a 24-bits-per-transfer mode, which operates at 59ksps throughput. Refer to the timi ng  diagrams in the Clock Modes section of the MAX147 data sheet.

Table 1. Recommended QSPI Setup Parameters for 24 Bits per Transfer (used in KIT147.S19)

| PARAMETER   | VALUE                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------|
| SPBR        | 5 (1.68MHz)                                                                                                |
| CPOL        | 0 (clock is idle low)                                                                                      |
| CPHA        | 0 (data is stable on clock rising edge)                                                                    |
| BITS        | 16 (when enabled)                                                                                          |
| DTL         | 4 (7.6µs delay used in internal clock mode)                                                                |
| TR0         | 0000 0000 1xxx xxyy (configure and start conversion)                                                       |
| TR1         | 0000 0000 0000 0000 (read data)                                                                            |
| CR0         | External clock: 1000 xxx0 (hold CS low). Internal clock: 1010 xxx0 (hold CS low; DT delay after transfer). |
| CR1         | 0100 xxx0 (16-bit enable)                                                                                  |
| RR1         | Received data, left justified, with one lead- ing zero bit                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

## Operating with QSPI, 16 Bits per Transfer

The program KIT14716.S19 demonstrates the 16-bitsper-transfer interface scheme, which operates at 91ksps throughput. In this demonstration, CS is  held  low  and the QSPI operates continuously in the background. Refer to the timing diagrams in the Clock Modes section of the MAX147 data sheet. To use this program, follow the instructions in Quick Start, but in step 8, download KIT14716.S19 instead of KIT147.S19. After loading, press ALT+C to switch to the control panel.

## Changing the Reference Voltage

The MAX147 EV kit software assumes a 2.5V reference voltage, unless otherwise specified. When using a reference value other than 2.5V, specify the value when starting the program. For example, if VREF is driven by a 2.048V reference, start the MAX147 software by typing:

## MAX147 VREF 2.048

Or, on the MAX146, if REFADJ is driven by a 1.2V reference, start the MAX147 software by typing:

## MAX147 146 REFADJ 1.2

The external reference's temperature coefficient must be 20ppm/°C or less to achieve accuracy to within four LSBs over the 0°C to +70°C temperature range. For 12-bit accuracy over the 0°C to +70°C range, the reference's temperature coefficient must be 4ppm/°C or less.

The MAX146 can use either its internal reference or an external reference. On the EV kit, the internal reference has been disabled by pulling REFADJ up to VDD (JU2) and driving VREF with a MAX872 2.5V reference (JU5).

## Table 2. Recommended QSPI Setup Parameters for 16 Bits per Transfer (used in KIT14716.S19)

| PARAMETER   | VALUE                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------|
| SPBR        | 5 (1.68MHz)                                                                                             |
| CPOL        | 0 (clock is idle low)                                                                                   |
| CPHA        | 0 (data is stable on clock rising edge)                                                                 |
| BITS        | 16                                                                                                      |
| DTL         | 4 (7.6µs delay used in internal clock mode)                                                             |
| TR0         | 0000 0001 xxxx xyy0 (configure and start conversion)                                                    |
| CR0         | External clock: 1100 xxx0 (16-bit transfer). Internal clock: 1110 xxx0 (16-bit transfer with DT delay). |
| RR0         | Received data, left justified                                                                           |

For lowest component count, enable the MAX146's internal  reference by removing the shunts from JU2 and JU5. This enables the internal bandgap reference and the reference buffer, driving VREF internally to 2.5V. A 0.01µF ceramic bypass capacitor near REFADJ (C1 on the EV kit) provides noise filtering for the bandgap reference.

## Detailed Description of Hardware

The MAX147 EV kit board includes a MAX666, configured as a 3V regulator. Trim pot R16 adjusts the VDD voltage between 2.3V and 3.6V.

The MAX872 is a micropower 2.5V reference.

The MAX494 and MAX495 are low-voltage, rail-to-rail op amps with 500kHz gain-bandwidth product. The MAX495 buffers the external COM input source. The MAX494 can be used to buffer some of the input signals.

The MAX393 analog switch allows the EV kit software to route the MAX147 COM pin to ground or to the external COM input. In addition, the external COM input can be routed to input channel 0. Typical systems connect COM directly to analog ground or the analog common voltage. The MAX393 can be powered by 3V, but if driven by 5V logic (as is the case with the EV system), it must be powered by 5V.

The 74HCT04 translates the DOUT and SSTRB signals from 3V to 5V logic levels for interfacing to the µC module.  The  MAX147's logic inputs can be driven directly from 5V logic levels.

## Input-Signal Buffering

The analog-to-digital converter (ADC) inputs require a sufficiently low-impedance source for specified accuracy. An ADC can inject a small amount of charge at the start of the acquisition time, and the source signal must recover to within the desired accuracy before the acquisition time ends. If the source by itself cannot do this, use an op amp to buffer the input signal.

To buffer the CH4-CH7 input signals, unplug the 14-pin header from U7, and install the supplied MAX494 quad op amp in its place. Note the location of pin 1 toward the upper right corner of the board.

When using an input buffer, the buffer output cannot reach the power-supply rails. If  the  MAX494 op-amp buffer is installed and the input to the buffer is grounded, the buffered output will not reach ground. The MAX494 allows its output signal to go to within approximately 50mV of either supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

Table 3. MAX147 EV Kit Command Reference

| KEY                    | FUNCTION                                                                                                                                                                                                                                                     |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0, 1, 2, 3, 4, 5, 6, 7 | Enables or disables the corresponding input channel 0, 1, 2, 3, 4, 5, 6, or 7. The EV kit software scans all enabled channels.                                                                                                                               |
| C                      | Displays the conversion results in decimal form.                                                                                                                                                                                                             |
| D                      | Delay between samples. Delays longer than one second are handled by the IBM PC; otherwise, the µC module han- dles the delay. Timing is approximate and should be verified with an oscilloscope.                                                             |
| L                      | Enables or disables data logging. If the -L command-line option was not specified, the L command prompts for a log-file name.                                                                                                                                |
| O                      | Oscilloscope demo. Samples are collected and discarded as fast as possible. Observe waveforms and timing with an oscilloscope.                                                                                                                               |
| P                      | Power-up delay. Timing is approximate and should be verified with an oscilloscope. When using an external refer- ence, power-up delay is not necessary and should be set to zero. Power-up delay is used regardless of which power-cycling mode is selected. |
| S                      | Samples one of the eight inputs at high speed. The sampling rate is controlled by the P and D delays. Due to pro- gram overhead, the O and S commands operate at different rates. Timing should be verified with an oscilloscope.                            |
| V                      | Displays the conversion results in volts.                                                                                                                                                                                                                    |
| F1                     | Chooses input scale (unipolar, bipolar, unipolar differential, bipolar differential) for all enabled channels. Disabled channels are unaffected.                                                                                                             |
| F3                     | Writes a marker into the data-log file.                                                                                                                                                                                                                      |
| F4                     | Measures the value of a user-applied COM voltage.                                                                                                                                                                                                            |
| F5                     | Changes the assumed value of VREF.                                                                                                                                                                                                                           |
| F6                     | Changes the assumed voltage at COM. Selecting G connects the COM pin to ground; selecting E connects the COM pin to the EXTCOM input pad.                                                                                                                    |
| F7                     | Internal clock mode                                                                                                                                                                                                                                          |
| F8                     | External clock mode                                                                                                                                                                                                                                          |
| ,                      | Selects power-down mode.                                                                                                                                                                                                                                     |
| ALT+T                  | Switches back to terminal mode.                                                                                                                                                                                                                              |
| ALT+X                  | Exits to DOS.                                                                                                                                                                                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

## Table 4. Command-Line Options when Starting MAX147 Software

| COMMAND    | FUNCTION                                                                    |
|------------|-----------------------------------------------------------------------------|
| 1          | Defaults to COM1 PC serial port.                                            |
| 2          | Defaults to COM2 PC serial port.                                            |
| MONO       | For use with monochrome or LCD display.                                     |
| -Lfilename | Opens file filename for data logging and enables the data-logging commands. |
| VREF vvv   | Specifies the actual measured voltage at the VREF pin (nominally 2.5V).     |
| COM vvv    | Specifies the voltage at the COM pin.                                       |
| ?          | Lists command-line options.                                                 |
| 146        | Enables MAX146-specific program features (FASTPD power-down mode).          |

## Table 5. Jumper Settings on MAX147 EV Kit

| JUMPER   | STATE                  | FUNCTION                                                                     |
|----------|------------------------|------------------------------------------------------------------------------|
| JU1      | Closed                 | Ties SHDN to pin 29 on the µC module.                                        |
| JU1      | Open (default)         | Forces SHDN to float.                                                        |
| JU2*     | Closed (default)       | Disable internal reference. VREF is an input.                                |
| JU2*     | Open                   | Enable internal reference. VREF is a 2.5V output ( not allowed with MAX147). |
| JU3      | Closed (default trace) | Current-sense jumper. The MAX147 draws its +3V supply through this trace.    |
| JU3      | Open                   | Do not operate kit with JU3 open.                                            |
| JU4      | Closed (default trace) | Switch U3 drives COM.                                                        |
| JU4      | Open                   | COM must be driven by an external source.                                    |
| JU5*     | Closed (default)       | Drive VREF with external reference.                                          |
| JU5*     | Open                   | Use internal reference ( not allowed with MAX147).                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

Figure 1.  MAX147 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX147 EV Kit Schematic (continued)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

Figure 2.  MAX147EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3.  MAX147EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

Figure 4.  MAX147EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

## Listing 1a.  Using the 68HC16 to Read the MAX147

```
QSPI Setup for 16 bits per transfer (KIT14716) InitADC: LDAA #(BipUniPin)!(ShdnPin); initially high GPT pins STAA GPTPDR LDAA #(BipUniPin) ： GPT output pins STAA PDDR LDAA #(CSto147) initially high QSM pins STAA QPDR LDAA #(CSto147)!(SCKto147)!(DinTo147)!(DoutFroml47) ； QSPI pins STAA QPAR LDAA #(CSto147)!(SCKto147)!(DinTo147) ： QSPI output pins STAA QDDR LDAA #(CRBITSE）!(CRCONT) : i6 bit transfer, hold Cs low between transfers STAA CRO LDD #%100001110 initial control word, with one following zero STD TRO CLR SPCR3 ; disable halt mode interrupt LDD #$8005 ;Master， BITS=16, CPOL=O， CPHA=O， SPBR=5 (1.68 MHz) STD SPCRO LDD #$0204 DTL=4 (7.6 uSec) STD SPCR1 LDD #$6000 ； NEWQP=O, ENDQP=O, Wrap to NEWQP, no interrupt STD SPCR2 BSETW SPCR1,#$8000 ；start the QSPI BCLR SPSR,#$80 ； clear SPIF bit ReadADC: LDD RRO RTS
```

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX147 Evaluation System/Evaluation Kit

## Listing 1b.  Using the 80C32 to Read the MAX147

```
80C32 Interface to MAX147 Read: clr CS ; assert chip select If a power-up delay is used... mov a,control_byte orl a,#003h ; Power On, External Clock Mode mov SPIout,a call SPIooTransfer ; start dummy conversion setb CS (execute power-up delay) clr CS ; interrupt dummy conversion mov SPIout,control_byte call SPIooTransfer send the start command If internal clock mode is being used, wait until SSTRB is set L1: jnb SSTRB,L1 ; loop while SSTRB is low mov SPIout,#0 call SPIooTransfer; get the first 8 bits mov data_high,SPIin mov SPIout,#0 call SPIooTransfer ； get the next 8 bits mov data_low,SPIin setb CS negate chip select clr C ; shift data left mov a,data_low rlc a mov data_low,a mov a,data_high rlc a mov data_high,a ret SPIooTransfer: ; simulate SPI with CPOL=O, CPHA=0 setb DOUT ： use DoUT as an input clr SCK ： start with clock low mov r2,#8 ： get 8 bits loop: mov C,SPIout.7 ： write bit on DIN output mov DIN,C setb SCK CLOCK RISING EDGE mov C,DOUT ： read bit on DoUT input mov SPIin.7,C clr SCK CLOCK FALLING EDGE mov a,SPIout shift left rl a mov SPIout,a mov a,SPIin shift left rl a mov SPIin,a djnz r2,loop ; repeat 8 times ret
```

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_68HC16 Module Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| C1, C2, C3    |     3 | 1µF ceramic capacitors                                     |
| C4, C5        |     2 | 22µF, 25V radial-lead electrolytic capacitors              |
| C6, C7        |     2 | 22pF capacitors                                            |
| C8            |     1 | 0.01µF capacitor                                           |
| C9            |     0 | Reference designator, not used                             |
| C10-C14       |     5 | 0.1µF capacitors                                           |
| D1            |     1 | 1N4001 diode                                               |
| J1            |     1 | 40-pin right-angle male connector                          |
| J2            |     1 | 2-circuit terminal block                                   |
| J3            |     1 | Right-angle printed circuit board mount, DB9 female socket |
| J4            |     0 | Open                                                       |
| JU1           |     0 | Open                                                       |
| JU2           |     0 | Reference designator, not used                             |
| JU3           |     0 | Open                                                       |
| JU4           |     0 | Open                                                       |
| JU5           |     0 | Open                                                       |
| L1            |     0 | Open                                                       |
| L2            |     0 | Open                                                       |
| LED1          |     1 | Light-emitting diode                                       |
| R1            |     1 | 10M Ω , 5% resistor                                        |

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The 68HC16 module is an assembled and tested printed-circuit board intended for use with Maxim's highspeed serial-interface evaluation kits (EV kits). The module uses an inexpensive 8-bit implementation of Motorola's MC68HC16Z1 microcontroller (µC) to collect data samples at high speed using the QSPI™ interface. It  requires  an  IBM-compatible personal computer and an external DC power supply, typically 12V DC or as specified in EV kit manual.

Maxim's 68HC16 module is provided to allow customers to evaluate selected Maxim products. It is not intended to  be used as a microprocessor development platform, and such use is not supported by Maxim.

QSPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| R2            |     1 | 330k Ω , 5% resistor                                       |
| R3, R4        |     2 | 10k Ω , 5% resistors                                       |
| R5            |     1 | 470 Ω , 5% resistor                                        |
| R6            |     1 | 10k Ω SIP resistor                                         |
| SW1           |     1 | Slide switch                                               |
| SW2           |     1 | Momentary pushbutton switch                                |
| U1            |     1 | 68HC16 µC MC68HC16Z1CFC16 (132-pin plastic quad flat pack) |
| U2            |     1 | Maxim MAX233CPP                                            |
| U3            |     1 | 27C256 EPROM containing monitor program                    |
| U4            |     1 | 7805 regulator, TO-220 size                                |
| U5            |     1 | 62256 (32K x 8) static RAM                                 |
| U6            |     1 | 74HCT245 bidirectional buffer                              |
| U7            |     1 | Maxim MAX707CPA                                            |
| Y1            |     1 | 32.768kHz watch crystal                                    |
| None          |     4 | Rubber feet                                                |
| None          |     1 | 28-pin socket for U3                                       |
| None          |     1 | 20-pin socket for U6                                       |
| None          |     1 | 3" x 5" printed circuit board                              |
| None          |     1 | Heatsink for U4, thermalloy # 6078                         |

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Power Input Connector J2

The 68HC16 module draws its power from a user-supplied power source connected to terminal block J2. Be sure to note the positive and negative markings on the board. A three-terminal 5V regulator allows input voltages between 8V and an absolute maximum of 20V. The 68HC16 module typically requires 200mA of input current.

## 68HC16 Microcontroller

U1 is Motorola's 68HC16Z1 µC. Contact Motorola for µC information, development, and support. Maxim EV kits use the high-speed queued serial peripheral interface (QSPI) and the internal chip-select generation.

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## 68HC16 Module

The 68HC16 uses a phase-locked loop (PLL) to set its bus speed. Crystal Y1 is a 32.768kHz frequency reference. The internal oscillator runs 256 times faster than the external crystal. When the 68HC16 is reset, it waits for the PLL to lock before it executes any software. After the PLL locks onto the reference frequency, the software doubles the clock speed by writing to the clock synthesizer control register, selecting a bus speed of 16.78MHz.

U5, the user RAM area, is a 32kbyte CMOS static RAM.

The 74HCT245 octal buffer lets the 68HC16 module access an 8-bit port on the 40-pin interface connector. This memory-mapped port consists of separate read and write strobes, four chip selects, four address LSBs, and eight data bits.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straightthrough DB9 male-to-female cable to connect J3 to this port. If the only available serial port has a 25-pin connector, you may use a standard 25-pin to 9-pin adapter. Table 1 shows the pinout of J3.

The MAX233 is an RS-232 interface voltage level shifter with two transmitters and two receivers. It includes a built-in charge pump with internal capacitors that generates the output voltages necessary to drive RS-232 lines.

## 40-Pin Data Connector J1

The 20 x 2 pin header connects the 68HC16 module to a Maxim EV kit. Table 2 lists the function of each pin. Note that 68HC16 object code is not compatible with 68HC11 object code. Use the 68HC16 module only with those modules that are designed to support it, and only download code that is targeted for the 68HC16 module. Downloading incorrect object code into the 68HC16 module will have unpredictable results.

## Address Ranges

The 68HC16 µC generates various enable signals for different address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (J1.11-J1.14) are available on the data connector to be used by Maxim EV kits. Table 3 outlines the address ranges for each of the elements found on the 68HC16 module, and Table 4 is a truth table that describes the logic for each of the 68HC16's chip-select outputs. Because the addresses are not completely decoded, the boot ROM and user RAM have shadows.

Table 1.  Serial Communications Port J3

|   PIN | NAME   | FUNCTION                                         |
|-------|--------|--------------------------------------------------|
|     1 | DCD    | Handshake; hard-wired to DTR and DSR             |
|     2 | RXD    | RS-232-compatible data output from 68HC16 module |
|     3 | TXD    | RS-232-compatible data input to 68HC16 module    |
|     4 | DTR    | Handshake; hard-wired to DCD and DSR             |
|     5 | GND    | Signal ground connection                         |
|     6 | DSR    | Handshake; hard-wired to DCD and DTR             |
|     7 | RTS    | Handshake; hard-wired to CTS                     |
|     8 | CTS    | Handshake; hard-wired to RTS                     |
|     9 | None   | Unused                                           |

Table 2.  40-Pin Data-Connector Signals

| PIN   | NAME    | FUNCTION                     |
|-------|---------|------------------------------|
| 1-4   | GND     | Ground                       |
| 5, 6  | VPREREG | Unregulated input voltage    |
| 7, 8  | VCC     | +5V from on-board regulator  |
| 9     | RD      | Read strobe                  |
| 10    | WR      | Write strobe                 |
| 11    | 7E000   | Chip select for 7E000-7E7FF  |
| 12    | 7E800   | Chip select for 7E800-7EFFF  |
| 13    | 7F000   | Chip select for 7F000-7F7FF  |
| 14    | 7F800   | Chip select for 7F800-7FFFF  |
| 15    | A00     | Address bit 0 (LSB)          |
| 16    | A01     | Address bit 1                |
| 17    | A02     | Address bit 2                |
| 18    | A03     | Address bit 3                |
| 19    | EXTD0   | Buffered data bus 0 (LSB)    |
| 20-26 | EXTD1-7 | Buffered data bus bits 1-7   |
| 27    | IC1     | General I/O port bit 0 (LSB) |
| 28    | IC2     | General I/O port bit 1       |
| 29    | IC3     | General I/O port bit 2       |
| 30    | OC1     | General I/O port bit 3       |
| 31    | OC2     | General I/O port bit 4       |
| 32    | OC3     | General I/O port bit 5       |
| 33    | OC4     | General I/O port bit 6       |
| 34    | IC4     | General I/O port bit 7       |
| 35    | MISO    | QSPI master-in, slave-out    |
| 36    | MOSI    | QSPI master-out, slave-in    |
| 37    | SCK     | QSPI serial clock            |
| 38    | PCS0/SS | QSPI chip-select output      |
| 39    | CLKOUT  | System clock output          |
| 40    | PWMA    | Pulse-width-modulator output |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. 68HC16 Module Memory Map (all address values are in 20-bit hex)

| PIN         | FUNCTION                                      |
|-------------|-----------------------------------------------|
| 00000-07FFF | Boot ROM (U3, strobed by CSBOOT)              |
| 08000-0FFFF | Shadow of boot ROM                            |
| 10000-17FFF | User RAM (U5, strobed by CS0 and CS2)         |
| 18000-1FFFF | Shadow of user RAM                            |
| 20000-203FF | Internal standby RAM; 1kbyte                  |
| 20400-7DFFF | Unused                                        |
| 7E000-7E7FF | External chip select (J1 pin 11) (CS7)        |
| 7E800-7EFFF | External chip select (J1 pin 12) (CS8)        |
| 7F000-7F7FF | External chip select (J1 pin 13) (CS9)        |
| 7F800-7FFFF | External chip select (J1 pin 14) (CS10)       |
| 80000-F7FFF | Not accessed by the 68HC16                    |
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

<!-- image -->

## 68HC16 Module

## Boot ROM

The boot ROM, U3, is configured as an 8-bit memory device. Resistor R4 pulls data bit 0 low during system reset, forcing the µC to fetch instructions using only the upper eight data bits. The boot ROM checks the system and waits for commands from the host. Refer to the EV kit manual for specific start-up procedures.

## Software

All  software is supplied on a disk with the EV kit. Instructions  for  operating  the  software  are  included  in the EV kit manual. Refer to the EV kit manual for more information.

## \_\_\_\_\_\_\_68HC16 Module Self Check

To test the 68HC16 module's integrity, connect the power supply to the power terminals (J2). Do not connect anything to J1 or J3. Slide the power switch SW1 to the 'ON' position. The LED will light up, and will flash within 5 seconds.

If the LED flashes with a 50%-on/50%-off duty cycle, then it passed its self check. Note that this test does not exercise the RS-232 port or the EV kit 40-pin interface, but it does confirm that the power supply, microprocessor, ROM, and RAM passed the self test.

If  the  LED  flashes  with  a  10%-on/90%-off  duty  cycle, then it  failed  its  self  check.  Most  likely,  the  RAM  chip (U5) is bad.

If the LED remains on and does not flash, then the problem is either U3 (the EPROM), U1 (the microprocessor), U4 (the regulator), the MAX707 reset generator, or the power supply. Use a voltmeter to verify that the power supplies are good. Check the power-supply input and the +5V output from the regulator. Use an oscilloscope to see if the 32.768kHz reference oscillator is running.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16 Module

## Table 4.  68HC16 Chip-Select Outputs Truth Table

Figure 1. 68HC16 Module Schematic

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

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. 68HC16 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. 68HC16 Module Schematic (continued)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  68HC16 Module Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  68HC16 Module PC Board Layout-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4.  68HC16 Module PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_80C32 Module Component List

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
| None                                  |     1 | 3.00" x 5.50" PC board                    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_80C32 Module

## 80C32 Module General Description

The Maxim 80C32 microcontroller (µC) module is intended for use with this and other Maxim evaluation kits  (EV kits).  It  contains the 80C32 µC, RS-232 interface, 8kbytes of EPROM, 32kbytes of static RAM, and

<!-- image -->

## 80C32 Module

address decoding logic.  A 40-pin connector mates with a connector found on Maxim EV kits designed to interface with the 80C32 module.

The module is connected to an IBM-compatible personal computer over a serial communications port. Software provided with each EV kit runs on the computer and controls the unit consisting of the 80C32 module and EV kit.  The program uses a routine stored in the 27C64 EPROM to download special 80C32 code for each kit.  The downloaded code controls the EV kit and, together with the  program running on the personal computer, displays the output data.

The board operates from a single 8V to 22V supply. Both the pre-regulated and regulated +5V levels are available to the EV kit through the 40-pin connector.

## 80C32 Module Power Supply

The Maxim 80C32 module requires an input of 8V to 22V for normal operation.  An on-board 78M05 power regulator supplies the 5V required for the logic on the module, and any 5V requirements for the EV kit attached to the 40-pin connector.  The pre-regulated voltage is also available on the data connector.  The source must be capable of supplying 100mA for the module and meeting the load requirements of the EV kit.

## Microprocessor Supervisor

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed.  A watchdog function was not included because they frequently interfere while debugging programs, and debugging is a prime function of this board.

## 80C32 Microcontroller

The 80C32 is a member of the popular Intel 8051 family of  µCs.    It  is  a  low-power  CMOS  version  that  requires external ROM for program storage, 256 bytes of internal  RAM, and four 8-bit I/O ports.  Three of the ports are required by the system for serial communications and memory control.  The fourth port (P1) is available through the data connector.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## 80C32 Module

The 80C32 communicates with the PC over a serial RS232 link.  A  MAX233 acts as a level shifter between the ±15V RS-232 signals and the TTL levels of the 80C32. The MAX233 also generates the output voltages necessary to drive RS-232 lines.

Port 0 (pins 32-39) of the 80C32 multiplexes the lower eight bits of memory address and the eight bits of read/write data.  The lower eight bits of address data are latched during each I/O cycle by the 74HCT573 octal latch.  The latch is controlled by the address latch enable (ALE) signal of the 80C32.  Port 2 (pins 21-28) of the 80C32 supplies the upper eight bits of address information.

The port 3 pins (10-17) provide several unrelated functions.    Pins  10  and  11  are  used  as  the  receive  data (RxD) and transmit data (TxD) pins of the RS-232 link. Pins 16 and 17 act as the write (WR) and read (RD) control signals for the data I/O cycles.  Four other pins are configured as interrupt and timer controls, but are not used on this board.

## Memory

The board has a 27C64 EPROM containing code for initializing  the  80C32  and downloading additional program code to the 62256 RAM.  After a reset, the EPROM resident code initializes the 80C32, determines the  address range of the RAM, sets the RS-232 baud rate  to  1200,  and  waits  for  communications from the PC.  Receiving any character will prompt the program to  send an initial banner that includes the program name, revision level, and boundaries of the on-board RAM.

The 62256 CMOS (32kbyte) static RAM is used to hold program code for the various Maxim EV kits that use the 80C32 module as the controller.  Programs are transferred from disk to the RAM using software running on a personal computer, such as MAXLOAD or other  programs  provided  with  Maxim  EV  kits. Programs written to execute from this RAM start at 4000 (HEX) and are typically less than 4kbytes long.  The remaining RAM is available for data storage.

## Address Ranges

Logic on the module board generates various enable signals for different address ranges.  The ROM and RAM enable signals are fed directly to the respective chips.  Several additional signals (CS0-CS3) are available on the data connector to be used by Maxim EV kits.  Table 1 outlines the address range for each of  the elements found on the 80C32 module.

Table 1.  Address Ranges in Hexadecimal

| ADDRESS RANGE (HEX)   | ADDRESS RANGE (HEX)   | ENABLE SIGNAL   |
|-----------------------|-----------------------|-----------------|
| 0000                  | 3FFF                  | ROM             |
| 4000                  | BFFF                  | RAM             |
| C000                  | CFFF                  | CS0             |
| D000                  | DFFF                  | CS1             |
| E000                  | EFFF                  | CS2             |
| F000                  | FFFF                  | CS3             |

## Data I/O Connector

A 40-pin connector mounted on the edge of the printed circuit  board provides connection between the µC module and other Maxim EV kits.  Both power and digital signals are transferred via the connector.  To join the module board with an EV kit, carefully align and insert the pins on the connector with the mating 40-pin female connector of the kit.  The pin functions are listed in  Table 2.

Table 2.  I/O Connector Pin Functions

| PIN   | FUNCTION                                 | DESCRIPTION              |
|-------|------------------------------------------|--------------------------|
| 1-4   | Ground Pre-regulator input Regulated +5V |                          |
| 5, 6  |                                          |                          |
| 7, 8  |                                          |                          |
| 9     | RD                                       | Read strobe              |
| 10    | WR                                       | Write strobe             |
| 11    | CS0                                      | Address C000-CFFF        |
| 12    | CS1                                      | Address D000-DFFF        |
| 13    | CS2                                      | Address E000-EFFF        |
| 14    | CS3                                      | Address F000-FFFF        |
| 15-18 | ADDR0-ADDR3                              | Lowest 4 bits of address |
| 19-26 | DB0-DB7                                  | 8-bit data bus           |
| 27-34 | P1.0-P1.7                                | 8 bits of port 1         |
| 35-40 | Reserved                                 |                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Software Architecture

Software for EV kits using the Maxim 80C32 module is divided into three elements: the interface program running on an IBM-compatible PC, a module program located in EPROM, and a program supplied on disk that is transferred to the RAM located on the module.

## EPROM Resident Program

The EPROM resident program initializes the 80C32, establishes communications over the RS-232 link, verifies  the  static  RAM,  and  downloads  other  programs. Its  operation  starts  on  power-up  and  whenever  the reset button is pressed.  After reset, the program waits  indefinitely  to  receive  a  character  over  the  RS232 port.  When the first character is received, a logon banner identifying the module and firmware revision is transmitted.

## 80C32 Module

Immediately following transmission of the logon banner, the program runs a checker routine for the on-board 256kbit static RAM.  The RAM is filled with several patterns and then read to verify that each pattern has been retained. A pass or fail indication is displayed on the personal computer after each pass.  EV kit software requires proper operation of the RAM.  Do not attempt to use the board if any of the RAM checks fail.

Two other programs for the EV kits are provided on a floppy disk shipped with each kit.  One program acts as the user interface and transmits commands to the 80C32 module.  The other is an 80C32 application program that executes from the RAM located on the module.    The  procedure for loading the programs varies with each kit, so follow the instructions provided.

<!-- image -->

Figure 1.  80C32 Module Component Placement Guide (x1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  80C32 Module Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  80C32 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 80C32 Module

Figure 3.  80C32 Module Component-Side Layout (x1)

<!-- image -->

Figure 4.  80C32 Module Solder-Side Layout (x1)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6