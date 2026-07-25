<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX197 evaluation system (EV system) is a complete, low-cost, 8-channel data-acquisition system consisting of a MAX197 evaluation kit (EV kit) and a Maxim 80C32 or 68HC16 microcontroller (µC) module.  IBM PC compatible software provides a handy user interface to demonstrate the MAX197's many features. Source code is provided.

The MAX197 EV kit requires a single +5V supply and includes optional input buffer amplifiers that operate with ±15V supplies.

The MAX197 EV kit and EV system evaluate both the MAX197 and the MAX199.  To evaluate the MAX199, order a sample of the MAX199 along with the MAX197 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_MAX197 EVC16 System \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX197 Evaluation Kit (MAX197EVKIT-DIP) |
|     1 | 68HC16 µC Module (68HC16MODULE-DIP)     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Proven PC Board Layout
- ' Complete Evaluation System
- ' Convenient Test Points Provided On-Board
- ' Data Logging Software
- ' Source Code Provided
- ' Fully Assembled and Tested
- ' User-Selected Microcontroller Module 80C32 or 68HC16

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX197EVKIT-DIP | 0°C to +70°C  | Through-Hole |
| MAX197EVC16-DIP | 0°C to +70°C  | Through-Hole |
| MAX197EVC32-DIP | 0°C to +70°C  | Through-Hole |

## \_\_\_\_\_\_\_\_\_\_\_\_MAX197 EVC32 System \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX197 Evaluation Kit (MAX197EVKIT-DIP) |
|     1 | 80C32 µC Module (80C32MODULE-DIP)       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_MAX197 EVC16 System

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## MAX197 Evaluation Kit

## \_\_\_MAX197 EV Kit Component List

| DESIGNATION           |   QTY | DESCRIPTION                |
|-----------------------|-------|----------------------------|
| C1, C8, C15, C16, C17 |     5 | 0.1µF ceramic capacitors   |
| C2-C7, C9, C12, C13   |     0 | Open                       |
| C10, C14, C18         |     3 | 10µF tantalum capacitors   |
| C11                   |     1 | 100pF ceramic capacitor    |
| J11                   |     1 | 2 x 20 header              |
| J15, J16              |     2 | 8-pin headers              |
| JU1                   |     1 | 2-pin header               |
| JU2                   |     1 | 3-pin header               |
| JU3, JU4              |     0 | Open                       |
| R1, R2, R3            |     0 | Open                       |
| U1                    |     1 | MAX197BCNI                 |
| U2                    |     1 | MAX874CPA 4.096V reference |
| U3, U4                |     2 | MXL1014CN quad op amps     |

## \_\_\_\_\_\_\_MAX197 Stand-Alone EV Kit

The MAX197 EV kit provides a proven PC board layout to facilitate evaluation of the MAX197.  It must be interfaced to appropriate timing signals for proper operation.  Refer to the MAX197 data sheet for timing requirements.

## \_\_\_MAX197 EV System Quick Start

- 1) Copy the files from the distribution disk to your hard disk  or  to  blank  floppy  disks.    The  MAX197  EV  kit software should be in its own directory.  The necessary files are in the root directory of the distribution disk,  and the source code is in the SOURCE subdirectory.  The SOURCE subdirectory is not required to operate the EV kit.
- 2) Carefully connect the boards together by aligning the 40-pin header of the MAX197 EV kit with the 40pin connector of the µC module.  Gently press them together.  The two boards should be flush against each other.
- 3) Connect a +15V/-15V DC power supply to the OPAMP V+ / OPAMP V- inputs of the MAX197 EV kit.  Connect the power supply's COMMON terminal to the kit's AGND pad.

2

- 4) Connect a 9V to 15V DC power source to the µC module.  The terminal block is located next to the on/off  switch,  in  the  upper  right  corner  of  the  µC module.  Observe the polarity marked on the board. The same +15V supply that powers OPAMP V+ can be used to power the µC module.
- 5) Connect a cable from the computer's serial port to the µC module.  If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable.  If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 6) Start the MAX197 software on the IBM PC by setting the current directory to match the directory that contains the Maxim programs, and then type the program name, 'MAX197'.  Do not turn off or disconnect the µC module while the program is running; if you do, you will have to restart the program.
- 7) The program will ask which µC module is being used and to which port it is connected.  Press the space bar until the correct port is highlighted, and press C until the correct µC module is highlighted. Press ENTER when both are correct.  The MAX197 program will be in terminal emulation mode.
- 8) Turn on the power for the µC module.  The µC module will display its logon banner and test its RAM.
- 9) Download and run the RAM resident program on the µC module by pressing ALT+L (i.e., hold down the ALT key as you strike the L key).  The program prompts you for the file name.  Press the ENTER key to download and run the file.
- 10) Press ALT+C to switch to the Control Panel screen after the RAM resident program has been successfully downloaded.
- 11) Apply input signals to the CH0-CH7 inputs at the right  edge  of  the  MAX197 EV kit board.  Observe the readout on the screen.  Table 1 lists the commands available from the control-panel screen.
- 12) Before turning off power to the MAX197 EV kit, exit the program by pressing ALT+X.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_Detailed Description of Software

## Reading the MAX197

The EV kit reads the MAX197 using the algorithm shown in source code Listings 1a and 1b.

When power is first applied, the MAX197 is in external clock mode.  However, the initialization software reconfigures the MAX197 to internal clock mode.

The EV kit software demonstrates the MAX197's many modes of operation.  When writing your own applicationspecific software, one of the following simplified algorithms (shown in bold type) should be implemented. These algorithms show the options available using the power-down and acquisition mode control bits.  Except where otherwise specified, ACQMOD = 0.

When using an external reference, a power-up delay is not necessary.  When using the MAX197's internal reference, allow time for the REF capacitor to charge at power-up and when exiting full power-down mode.  For a complete description of all control bits, refer to the MAX197 data sheet.

## Internal acquisition mode, standby power-down between conversions:

- 1) Begin conversion by writing PD1 = 1, PD0 = 0.  This powers up the MAX197, causing it to perform a conversion, then go into standby mode after conversion completes.
- 2) After the INT pin goes low, read the result from the MAX197.

## Internal acquisition mode, full power-down between conversions:

- 1) Power up the MAX197 by writing PD1 = 1, PD0 = 0 (standby).
- 2) Execute a power-up delay, to allow the reference capacitor time to recharge.
- 3) Begin conversion by writing PD1 = 1, PD0 = 1 (full power-down).
- 4) After the INT pin goes low, read the result from the MAX197.

## Internal acquisition mode, SHDN pin low between conversions:

- 1) Power up the MAX197 by setting the SHDN pin high.
- 2) Execute a power-up delay to allow the reference capacitor time to recharge.

<!-- image -->

## MAX197 Evaluation Kit

- 3) Begin conversion by writing PD1 = 1, PD0 = 0 (standby).
- 4) After  the  INT pin goes low, read the 16-bit result from the MAX197.
- 5) Power down the MAX197 by setting the SHDN pin low.

## External acquisition mode, standby power-down between conversions:

- 1) Begin acquisition time by writing PD1 = 1, PD0 = 0 (standby), ACQMOD = 1.
- 2) Execute the acquisition time delay.
- 3) Begin conversion by writing PD1 = 1, PD0 = 0 (standby), ACQMOD = 0.
- 4) After the INT pin goes low, read the result from the MAX197.

## External  acquisition  mode,  full  power-down between conversions:

- 1) Power up the MAX197 by writing PD1 = 1, PD0 = 0 (standby).
- 2) Execute a power-up delay, to allow the reference capacitor time to recharge.
- 3) Begin acquisition time by writing PD1 = 1, PD0 = 0 (standby), ACQMOD = 1.
- 4) Execute the acquisition time delay.
- 5) Begin conversion by writing PD1 = 1, PD0 = 1 (full power-down), ACQMOD = 0.
- 6) After the INT pin goes low, read the result from the MAX197.

## External acquisition mode, SHDN pin low between conversions:

- 1) Power up the MAX197 by setting the SHDN pin high.
- 2) Execute a power-up delay, to allow the reference capacitor time to recharge.
- 3) Begin acquisition time by writing PD1 = 1, PD0 = 0 (standby), ACQMOD = 1.
- 4) Execute the acquisition time delay.
- 5) Begin conversion by writing PD1 = 1, PD0 = 0 (standby), ACQMOD = 0.
- 6) After the INT pin goes low, read the result from the MAX197.
- 7) Power down the MAX197 by setting the SHDN pin low.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX197 Evaluation Kit

## Listing 1a.  Using the 68HC16 to Read the MAX197

```
; Assumptions: ；Index register Xpoints to theMAx197address :IndexregisterYpointstoglobalvariablesarea : MAx197 INT pin inputs to IC1 of the GPT port ; MAx197 SHDN pin is driven by Oc1 of the GPT port (or else it should be tied high) F507 Ldab #$07 ; point index X to the MAx197's address 379C tbxk (s07E000 on the Maxim 68HC16 Module) 37BC E000 ldx #SE000 : optional -- set_SHDN pin high 3908 F907 bset $F907,#8 :optional power-up delay 3755 000C lde 37D5 0006 Ldd -control_word,y ： out ((control_word & ~ Oxco)|0x80); F63F andb #s3F ; clear PD1,PDO F780 orab #s80 ; set PD1 CAOO stab 0,x 27FB ted ： delay (power_up_delay); FAXX XXXX jsr delay :optional software-controlled acquisition time 3755 000E lde _aca_delay,y 37050006 ldd _control_word,y ： out ((control_word &~ Oxco)|oxA0); F63F andb #$3F ; clear PD1,PD0 F7A0 orab #$A0 ; Set PD1,ACQMOD CAOO stab 0,x 27FB ted ： delay (aca_delay); FAxX xXXX jsr delay ;start the conversion by writing the control word to the MAx197 37050006 Ldd _control_word,y CAOO stab 0,x ； out (control_word); ipoll the INT pin until the MAx197 conversion is complete while1: ： while（INT pin is high）{ 3A01 F907 brclr $F907,#1,whilex1 0014 37B5 55AA PP1 #$55AA ; reset software watchdog timer 177A FA27 staa swsr 17FA FA27 stab swsr 1775 FCOD ldaa scsr+1 ： if(serial_character_received())break; 7640 anda #$40 B7E2 beq white1 ： whilex1: ; optional -- bring SHDN pin low 37D5 000A Idd _using_shdn_pin,y ;if (using_shdn_pin)( F800 cmpb # B700 beqifelse4 3808 F907 bclr $F907,#8 clearbit(SHDN pin); ifelse4: ;read data word from MAx197 8500 ldd 0,x ; read word from MAx197 371A xgab ；swap low and high words 37DA 0008 std _last_word_read,y
```

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Listing 1b.  Using the 80C32 to Read the MAX197

```
;Assumptions: ; MAx197 maps to address c000 (low byte) and c001 (high byte) ；MAX197 INT pin inputs to P1.0 ; MAx197 SHDN pin is driven by P1.3 (or else it should be tied high) ;global variables are in internal RAM =0093# SHDNPIN equ P1.3 #0600= INTPIN equP1.0 ; optional -- set SHDN pin high D293 Setb SHDNPIN ; optional power-up delay E524 mov a,_control_word out ((control_word &~ 0xc0)| Ox80); 543F anl a,#03Fh ;Clear PD1,PDO 4480 orl a,#080h_; set PD1 90C000 mov dptr,#0c000h FO movx @dptr,a AA29 mov eiapdnJamod delay (power_up_delay); AB2A mov r3,_power_up_delay_h delay_loopp: C3 C EA mov a,r2 60 #6 subb a,#09h FA mov r2,a EB mov a,r3 00 6 subb a,#00h FB mov r3,a 50 F5' jnc delay_loopp ;optional software-controlled acquisition time E524 mov a,_control_word ： out ((control_word & ~ Oxco) | OxA0); 543F anl a,#03Fh ;clear PD1,PDO 44A0 orl a,#0AOh ; Set PD1,ACQMOD 90 CO00 mov dptr,#0c000h FO movx @dptr,a E5 2B mov a,_aca_delay FD mov r5,a OD inc r5 del ay_ioopa: .300 DJNZ r5,delay_loopa ： delay (acq_delay); ; start the conversion by writing the control word to the MAx197 E524 mov a,_control_word 90CO00 mov dptr,#0c000h ；out (control_word) FO movx @dptr,a ; poll the INT pin until the MAx197 conversion is complete while1: ；while（INT is high）{ 3090#03: jnb INTPIN,whilex1 3098# FA' jnb RI,whilel if （keypressed()） break; whilex1: ; optional -- bring SHDN pin low C293 clr SHDNPIN ;read data word from MAx197 0000 mov dptr,#0c000h EO movx a,@dptr F5 26 mov last_word_read_l,a 90C001 mov dptr,#0c001h EO movx a,@dptr F5 27 AOW _last_word_read_h,a
```

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

<!-- image -->

## Shutdown Power Cycling

From the control panel, use the up/down arrow keys to select the power-down mode.  STANDBY power cycling puts the MAX197 in standby mode between readings, and FULLPD turns off everything except the 2.5V bandgap reference.  The MAX197 is always fully powered during conversions.  The MAX197's shutdown pin can be used to put the device into FULLPD mode. When using FULLPD or SHDN, a power-up delay may be necessary to allow the reference buffer time to recharge.  From the control panel, use the 'P' command to set this power-on delay.  The 68HC16 software allows delays between 68µs and 6000µs.  The 80C32 software allows delays between 8µs and 65535µs. A value of 0 disables the delay.  Refer to the Typical Timing Characteristics to see the relationship between the value selected on the corresponding power-up delay.

## Low-Speed Data Logging

The RS-232 serial link limits the data logging sample rate to no more than 10sps (samples per second).  The data logging command can be used to write data to a user-specified file in plain comma-spaced-value text format.  From the control panel screen, press L.  If a log file  is  not  already  open,  the  software  will  ask  for  a  file name.  Only one log file is allowed per session.  Once a log file has been opened, pressing L toggles data logging on or off.  While data logging is enabled, the word 'Logging' will flash on the screen.  One complete line of data is written to the log file after all enabled channels have been sampled.

The first  line  of  the  log  file  contains  the  column  headings.  Each subsequent line of the log file contains all eight channels, separated by commas.  The values are written as raw decimal output codes or as scaled voltages, depending on which setting the control panel is currently displaying.  Use the C and V commands to select the display format (see Table 1).  F3, the log data marker command, can be used to sequentially tag different sections of the log file to indicate a change in setup or input conditions.  Pressing F3 writes an extra entry at the end of the current line of the data log, which can be useful for indicating a change in setup or input conditions.

## MAX197 Evaluation Kit

## High-Speed Data Sampling

For sampling rates over 10sps, the S command can be used.  Data can be collected from only one of the eight channels at a rate from 100sps up to 45ksps for the 68HC16 module (10sps to 10ksps for the 80C32 module).    First,  select  the  channel  by  pressing  one  of  the number keys 0-7.  Next, press F to specify the name of the file into which the samples should be written.  If the file  already  exists,  the  screen  will  say  '***  file  already exists***'.  To begin collecting data, press B.  After 1024 samples have been collected, the data is automatically uploaded to the host and stored in the sample file.

## Controlling the Sampling Rate

The rate for high-speed sampling, data logging, and the oscilloscope demo mode (see Table 1, key 'O') is controlled by the D (delay between samples) command.

When used with the sample or oscilloscope demo commands, specify the approximate delay in microseconds by typing D, the approximate delay time, then 'usec'. Refer to the Typical Timing Characteristics to see the relationship between the value selected and the corresponding delay between samples. Due to code overhead, this delay is not perfectly linear, so timing should always be verified using an oscilloscope.  The fast sampling screen and oscilloscope demo mode use delays on the order of 100µs to 1000µs.  The 80C32 software supports delays between 24µs and 73ms, but the 68HC16 software only supports delays between 68µs and 6000µs.

When used with the slower data-logging command, specify the delay in seconds.  This delay is defined as the time between two consecutive conversions.

## Tare Command (software offset null)

The tare command is used to compensate in software for the offset voltage.  Connect the channel 0 input pin to  ground (or, if  driving  with  an  op  amp,  connect  the channel 0 op amp's input to ground instead).  The 'T' command measures the offset voltage on channel 0 and subtracts that offset from all subsequent readings on all  channels.  The tare command is canceled by pressing CTRL+T.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX197 Evaluation Kit

## \_Detailed Description of Hardware

## Driving the Analog Inputs

Select an op amp based on its settling time.  A fast settling time is more important than a fast slew rate.  Sites U3 and U4 on the EV kit are industry-standard quad op-amp pinouts in the voltage-follower configuration. When using a slow op amp, extend the acquisition time by using the 'A' command in the control panel.  The 68HC16 software allows acquisition times between 68µs and 6000µs.  The 80C32 software allows acquisition  times  between 12µs and 560µs. A value of 0 disables the delay.

For high sampling rates, a fast settling op amp such as Maxim's MXL1014 performs quite well. Refer to the Typical Timing Characteristics to  see  the  relationship between the value selected and the corresponding external acquisition delay.  For lower sampling rates, any quad 741 type op amp should be adequate.  The LM348 is an inexpensive solution.  For +5V single-supply systems, the MAX414 is recommended.

## Changing the Reference Voltage

The MAX197 can use either its internal reference or an external reference.  On the EV kit, the internal reference has been disabled by pulling the REFADJ pin up to +5V (JU1) and driving the REF pin with a MAX874 4.096V reference (JU2).

When driving the REF pin with an external reference, install a shunt at JU1 and place JU2 in the 1-2 position. When driving the REFADJ pin with an external reference, leave jumper JU1 open and place JU2 in the 2-3 position.

For lowest component count, the MAX197's internal reference can be enabled by removing the shunts from JU1 and JU2.  This enables the internal bandgap reference and the reference buffer, driving REF internally to 4.096V.  For best results, install a 0.01µF ceramic bypass capacitor near the REFADJ pin (C7 on the EV kit).

8

The MAX197 EV kit software assumes a 4.096V reference voltage, unless otherwise specified.  When using other reference values, the reference value must be specified when starting the program.  For example, if the REFADJ pin is driven by a 2.048V reference, start the MAX197 software by typing:

## MAX197 REFADJ 2.048

Or, if the REFADJ pin is pulled high and REF is driven by a 3.00V reference, start the MAX197 software by typing:

## MAX197 REF 3.00

## Using an External Clock

Cut JU4 open.  From the control panel, press F8 to select external clock mode.  Apply the external clock to the EXTCLK input pad.

## Evaluating the MAX199

To evaluate the MAX199 using the MAX197 EV kit, replace U1 with a MAX199.  Then, at the DOS prompt, start the MAX197 software by typing:

## MAX197 199

If  the  voltage  reference is different than the default 4.096V,  the  MAX197  EV  kit  software  should  be informed.  For example, if the REFADJ pin is driven by a 2.048V reference, start the MAX197 software by typing:

## MAX197 199 REFADJ 2.048

Or, if the REFADJ pin is pulled high and REF is driven by a 3.00V reference, start the MAX197 software by typing:

## MAX197 199 REF 3.00

Refer to the Changing the Reference Voltage section for an explanation of how REF and REFADJ interact.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1.  MAX197 EV Kit Commands

| KEY    | FUNCTION                                                                                                                                                                                                                                                               |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| F1     | Choose input scale (bipolar 10V, unipolar 10V, bipolar 5V, unipolar 5V). The currently active scale is shown underneath the bar-graph display.                                                                                                                         |
| 0-7    | Enable or disable the corresponding input channel 0, 1, 2, 3, 4, 5, 6, or 7. The EV kit software scans all selected channels.                                                                                                                                          |
| C      | Display the input codes in decimal.                                                                                                                                                                                                                                    |
| V      | Display the input voltages.                                                                                                                                                                                                                                            |
| D      | Delay between samples. Delays longer than one second are handled by the IBM PC; otherwise, the µC module handles the delay. Timing is approximate and should be verified with an oscilloscope.                                                                         |
| ›, fl  | Select standby, fast power-down, SHDN power-down, or no power-down.                                                                                                                                                                                                    |
| P      | Power-up delay. Timing is approximate and should be verified with an oscilloscope. Power-up delay is used regardless of which power-cycling mode is selected. In standby mode, power-up delay is not necessary and should be set to zero.                              |
| A      | External acquisition time for use with slow op amps. Timing is approximate and should be verified with an oscillo- scope. The MAX197 is placed in standby mode during acquisition time.                                                                                |
| F7     | Internal clock mode. Timing is controlled by capacitor C11. JU4 should be closed when using this mode.                                                                                                                                                                 |
| F8     | External clock mode. Clock must be provided at EXTCLK input pad. JU4 should be cut apart when using this mode.                                                                                                                                                         |
| O      | Oscilloscope demo. Samples are collected and discarded as fast as possible. Observe waveforms and timing with an oscilloscope.                                                                                                                                         |
| S      | Sample one of the eight inputs at high speed and upload to a user-specified file. The sampling rate is controlled by the P, A, and D delays. Due to program overhead, the O and S commands operate at different rates. Timing should be verified with an oscilloscope. |
| T      | Tare (offset voltage null). Assumes that channel 0 is connected to AGND. Measures the code at channel 0 and subtracts that value from all subsequent readings.                                                                                                         |
| CTRL+T | Cancel the Tare (T) function.                                                                                                                                                                                                                                          |
| L      | Enable or disable data logging. If the -L command line option is not specified, the L command prompts for a log file name.                                                                                                                                             |
| F3     | Write a marker into the data log file. (See the Low-Speed Data Logging section.)                                                                                                                                                                                       |
| ALT+T  | Switch back to terminal mode.                                                                                                                                                                                                                                          |
| ALT+X  | Exit to DOS.                                                                                                                                                                                                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX197 Evaluation Kit

## MAX197 Evaluation Kit

Table 2.  Command-Line Options when Starting MAX197 Software

| COMMAND    | FUNCTION                                                                                                                                                                 |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | Default to COM1 part of the PC.                                                                                                                                          |
| 2          | Default to COM2 part of the PC.                                                                                                                                          |
| MONO       | For use with monochrome or LCD display.                                                                                                                                  |
| -Lfilename | Open file 'filename' for data logging, and enable the data-logging commands.                                                                                             |
| REF vvv    | Specify the voltage at the REF pin (nominally 4.096V). Note that REF is an input or an output, depending on the state of the REFADJ pin. Refer to the MAX197 data sheet. |
| REFADJ vvv | Specify the voltage at the REFADJ pin (nominally 2.5V).                                                                                                                  |
| 199        | Interprets the output codes for a MAX199 instead of a MAX197. Refer to the MAX199 data sheet.                                                                            |

Table 3.  Jumper Settings on MAX197 EV Kit

| JUMPER   | STATE   | FUNCTION                                                                                  |
|----------|---------|-------------------------------------------------------------------------------------------|
| JU1      | closed  | (Default) Disable internal bandgap reference; REF pin is an input.                        |
| JU1      | open    | Enable internal bandgap reference; REF pin is 4.096V output.                              |
| JU2      | 1-2     | (Default) Connects external 4.096V reference (MAX874) to REF pin; JU1 must be closed.     |
| JU2      | 2-3     | Connects external reference to REFADJ pin.                                                |
| JU2      | open    | REF = 4.096V output and REFADJ = 2.5V output (internal reference)                         |
| JU3      | closed  | (Default Trace) Current-sense jumper. The MAX197 draws its +5V supply through this trace. |
| JU3      | open    | Do not operate kit with JU3 open.                                                         |
| JU4      | closed  | (Default Trace) Use C11 as the timing capacitor for the MAX197 internal clock mode.       |
| JU4      | open    | Use the EXTCLK input pad as clock input.                                                  |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11

Evaluates:  MAX197/MAX199

## MAX197 Evaluation Kit

Figure 2.  MAX197 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX197 Evaluation Kit

Figure 3.  MAX197 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX197 Evaluation Kit

Figure 4.  MAX197 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_