<!-- lastmod 2022-08-03 -->
19-0013;Rev 0:3/92

## EVALUATION KIT

## General Description

TheMAX180evaluationkit(EVkit)presentsan80C32baseddesign thatdemonstrates theoperationof the MAX180,acomplete,8-channel,12-bitdata-acquisition system (DAS).The kit provides a method to quickly evaluatetheMAX180'sabilitytomeetsystemdesign requirements.After evaluation is completed, the EV kit's PCboard layoutservesasaprovenlayoutforthenew system design.The software,which includes source code,canbeeasilymodifiedtofitparticularapplications.

The MAX180 EVkit allows the user to selectvarious MAX180operatingmodesandperformconversions through an RS-232 data ink.The results are displayed on an IBM-compatible personal computer running a terminalemulatorprogram.

TheEVkit alsosupports theMAX181analog-to-digital converter(ADC). TheMAX181is similar to the MAX180, except it provides access toboth the 6-channel analog multiplexer output and the ADC's input.See the MAX180/MAX181datasheetfordetails.

## Features

- 12-Bit, 8-Channel Data-Acquisition System
- Proven Printed Circuit Board Layout
- Debugged Software Source Code
- ← Operates from a Single +6V to +10V Supply
- ← Prototyping Area for the User's Signal Conditioning Circuits
- ←Interfaces to IBM-Compatible Computer through RS-232 Port

<!-- image -->

## Ordering Information

| PART        | TEMP.RANGE   | BOARDTYPE                        |
|-------------|--------------|----------------------------------|
| MAX180EVKIT |              | 0°Cto+70'CPlasticDIP-ThroughHole |

## EV Kit

<!-- image -->

## Functional Diagram

<!-- image -->

<!-- image -->

Maxim Integrated Products1

## MAX180 Evaluation Kit

## Component List

| DESIGNATION                                               |   QUANTITY | DESCRIPTION               |
|-----------------------------------------------------------|------------|---------------------------|
| C3,C4                                                     |          2 | 15pFcapacitors            |
| C1,C5,C6,C6,C9, C10,C11,C12,C13, C21,C23 C16,C17,C19,C20, |         15 | 0.1μF capacitors          |
| C2.C7,C15                                                 |          3 | 4.7uF16Vcapacitors        |
| C8,C18                                                    |          2 | 47uF16Vcapacitors         |
| C14,C22                                                   |          2 | 100uF16Vcapacitors        |
| CR1.CR2                                                   |          2 | 1N4001diodes              |
| CR3.CR4                                                   |          2 | 1N4148diodes              |
| CR5                                                       |          1 | 1N5817diode               |
| JU1                                                       |          1 | 2-pinpowerconnector       |
| JU2                                                       |          1 | D25 right-angle connector |
| L1                                                        |          1 | 330uH inductor            |
| Q1                                                        |          1 | 2N7000                    |
| R1,R4                                                     |          2 | 10kQ5%resistor            |
| R2,R3                                                     |          2 | 100kQ5%resistors          |
| RP1                                                       |          1 | 10kQ9-resistor SIP        |
| RP2                                                       |          1 | 100kQ9-resistor SIP       |
| S1                                                        |          1 | powerswitch               |
| U1                                                        |          1 | 74HCT138                  |
| U2                                                        |          1 | 80C32                     |
| U3                                                        |          1 | 74HCT393                  |
| U4                                                        |          1 | 74HCT373                  |
| U5                                                        |          1 | 74HCT245                  |
| U6                                                        |          1 | MAX180ACPL or MAX181ACPL  |
| U7                                                        |          1 | MAX667CPA                 |
| U8                                                        |          1 | MAX699CPA                 |
| U9                                                        |          1 | 27C64                     |
| U10                                                       |          1 | 6264LP                    |
| U11                                                       |          1 | MAX233ACPP                |
| U12                                                       |          1 | 74HCT7266                 |
| U13                                                       |          1 | MAX636BCPA                |
| Y1                                                        |          1 | 11.059MHz crystal         |
| None                                                      |          1 | 28-pinICsocket            |
| None                                                      |          1 | 40-pinICsocket            |
| None                                                      |          1 | 81/2"x5"PCboard           |
| JU4                                                       |          1 | 2-pin jumper              |
| JU5                                                       |          1 | 3-pin jumper              |
| None                                                      |          2 | shunts                    |
| None                                                      |          1 | MAX180/MAX181 datasheet   |

## Quick Start

Setupandoperationof theMAX180evaluationkit involves thefollowing steps:

- 1.Assemble the printed circuit board using the procedureintheAssemblyInstructionssection.
- 2.Copy the MAX180 EVkit floppy disk to another disk and store the original in a safe place.Use the copy fornormal operation.
- 3.Read the READMEfile for updates and changes.
- 4.（ Connectacablebetweenaserialport(CoM1or COM2)of thepersonal computerand theMAX180EV kit printed circuit board. If a 25-pin (D25) connector is available,a straight-through cable canbe used.If onlya 9-pin(D9)connectorisavailable,anadapter is required.
- 5.S Start theSERCOMMprogram on thepersonal computer andset the indicated active port to agreewith the cable location.
6. Turn power on the printed circuit board.
- 7.Type a SPACE to initialize communication with the EV kit board.The board shouldrespond with a logon message.If not,refer to the trouble-shooting guide in this manual.
- 8.Entera'?'fora listof availablecommands.
9. Connect the input signals to the analog input(s) and the system is ready for operation.

## Detailed Description Board Architecture Power Supply

Theevaluationboardcanbepoweredbya9Valkaline battery or by an external 6V to 10V DC power supply. A MAx667low-dropoutvoltageregulatorprovidesthe+5V supply required by the other devices on theboard.

The-12Vis generated on theevaluationboardbya MAX636Afixed-output,CMOS,inverting switchingregulator.

## Supervision

TheMAx699low-cost power-onreset and watchdog timercontrollerprovideson-boardsupervisionforthe microprocessor(μP) system.TheMAx699generatesa RESET signal at power-on and if the μP's firmware fails to generate a transition at least once a second.Refer to theWatchdog-EnableJumperBlocksectioninthismanualandtheMAx699datasheetformoreinformation.

<!-- image -->

## RS-232 Interface

TheRS-232interfaceconnects anexternalterminal tothe evaluation board. TheMAX233,+5V-powered,dual RS232transmitterandreceiverinterfacechipperformsthe requiredlevel shiftingforthe80C32's integratedserial port.

One of the RS-232receivers is not used by the design and isavailableforprototypingoptions.

## Microprocessor

The 80C32receives theuser's commands over the RS232connection,performstherequested command,and thenreturns theresultsto the terminal overtheRS-232 link.The full list of commands and responses is described intheFirmwareStructure section of thismanual.

Memoryforthe80C32includesa27C648kbyteROMand a6264CMOS8kbyteRAM.TheROMstoresthe80C32's firmware.The RAM is used tobuffer theresults of analog-to-digital conversions. The firmware's assembly language source code is providedon the diskette.

The addressdecoding circuitryhas associatedjumpers thatdeterminetheaddressrangeofboththedevice enablesignalsenttotheROMandRAM,andof theextra hardware decoding\_signals(2000-3FFF, 4000-5FFF, 8000-9FFF,A000-BFFF,C000-DFFF)providedforprototype expansion.The Jumper Options section discusses setting this jumper.

TheMAX180data lines arebufferedand attached tothe 80C32's data bus. Its chip-select signal (CS) is generatedby theaddress decoding circuitry.Theeight data input/output (/O)pins,the three address pins (A0-A2), the BIPpin,and the DIFF pin are multiplexed onto the data bus.

The 80C32's 8-bit data bus and the controi signals (PSEN, RD, WR, and ANYRD) are provided at labeled pads for prototyping.

The 80C32's PORT 1 (P1) is a general purpose I/O port. Thebitshavebeenassigned thefollowinguses:

|         | Bit O-Programmed Heartbeat to the MAX699 Watchdog   |
|---------|-----------------------------------------------------|
| Bit1-   | High-Byte Enable(HBEN) to the MAX180                |
| Bit 2-  | BUSYfrom theMAX180                                  |
| Bit 3 - |                                                     |
| Bit 4   |                                                     |
|         | Available for Prototyping                           |
| Bit6    |                                                     |
| Bit7-J  |                                                     |

<!-- image -->

## MAX180 Evaluation Kit

The 80C32 uses an 11.059MHz crystal. This frequency allows theμPtoexecutemostof its instructions in1.085us andprovidesanexactintegermultipleforthestandard baud rates.

## Frequency Divider

The μP'soscillatoroutput is divided by a74HCT393and used toproducetheclocksignal fortheMAX180.The MAX180 clock has a 50% duty cycle and runs at 1.382MHz(11.059MHz divided by 8).

## MAX180Complete,8-Channel, 12-Bit Data-AcquisitionSystem

TheMAX180's analog input pins are brought out to eight pairsonsolderpads,with thefollowingmarkingsonthe silk screen:

AINO

AIN1

AIN2

AIN3

AIN4

AIN5

AIN6/MUXOUT

AIN7/ADCIN

The MAX180's MODE pin is permanently pulled up to +5V, which places the MAX180 into its I/O port mode.

Jumpers JU1 and JU2 (see Figure 1a) allow reference andoffsetadjustments.

Jumper JU3 (see Figure 1a) selects either an intermal or externalreference.

## Firmware Structure

Thesourcecodefortheevaluationboard'sfirmwareis provided on a diskette.The program is in assembly language and operates withan 80C32assembler.The programbeingexecuted intheROMwillbereferred to as the monitor.

Themonitorenters itsmaincontrolloop afterinitialization. This code starts at the label'main.'Main calls'get\_com-mand'whichhandleskeyboardentryfor themonitor. Commands thatsimplychangethestateof themonitor (forinstance the'H"command,whichisused tosetthe outputmodetohexadecimal)arehandledwithin 'get\_command.' Commands requiring action, such as makinganalog-to-digitalconversionsortestingRAM, retumfunctionrequestcodes tomain.Main thencalls the function associated with the request code.

## 80C32/MAX180Interface

TheMAX180is connected to the80C32with the μP's8-bit data bus.TheMAXt80 appears to the μP as a single

## MAX180 Evaluation Kit

register at any addressin the Eooo...Fooorange in either the CODEor DATA memory segments.

In addition, the MAX180's HBEN and BUSY pins are connected to two of the 80C32's PORT1 pins.

A write to theMAX180startsa conversion.The bit pattern written to theMAX180conveys thefollowing information:

| BITO BIT 1   | AO A1   | Analog Input Channel Select {(0...7}   |
|--------------|---------|----------------------------------------|
| BIT2         | A2      |                                        |
| BIT3         | BIP     | Bipolar (not unipolar select)          |
| BIT 4        | DIFF    | Differential (not single-ended select) |
| BIT5         | Ignored | Ignored                                |

TheMAX180'sBUSYpin ismonitored todetect conversion end.The MAX180 is read twice at the end of the conversiontoobtainboth data bytesthatmake up thefull 12-bit word. The first read is made with HBEN low to get theleast significant byte of the conversion.The second read is madewithHBEN highto get theupperfour bits (most significant nibble) of the conversion.

ThefollowingcodehasbeenextractedfromtheEVkit's sourcecode.ItistheconversionroutinefortheMAX180. Itassumes the currentchannel numberis stored in the channelregisterand hasavalueof{o...7).It further assumesthatthea2d\_flagsregistershavetheDIFFand BIPbitssettoindicatewhatcombinationofBIPandDiFF theMAX180shouldbeinwhenitperformstheconversion.SeetheMAX180/MAX181datasheetforfurther descriptionoftheseoperatingmodes.

## Application Information Attaching the Terminal

TheMAX180 evaluationboard attachestoa dumbterminalorapersonalcomputerrunningaterminalemulation program.The board is wired as data communications equipment(DCE)andexpectstobeconnectedtodata terminal equipment (DTE). A standard straight-through cableisusedtoattachtheboardtoapersonalcomputer running emulation software.

Thefollowingdiagramsshowtheconnectionsbetween theterminalandtheMAX180EVkit.

|                | sttl   | INPUT/OUTPUT DEFINITIONS   |                                      |
|----------------|--------|----------------------------|--------------------------------------|
| IO_PORT        | reg    | P1                         |                                      |
| TIC_TOC        |        | 01h                        | ；watchdog-timer reset pulse          |
| b_TIC_rOC HBEN | reg    | P1.0 02h                   | ；A2D converter::High-byte Enab       |
| nBUSY          | reg    | P1.1 04h                   | ；A2D converter::-BUSY                |
| b_BUSY         | reg    | P1.2                       |                                      |
| max180         | reg    | Oe0ooh                     | ;A2D converter is at {E0ooh...FFFFh} |
| a2d_start      | reg    | 1ch                        | ；starts A2D conversion pattern       |
| a2d_stop       | reg    | 1dh                        | ;ends A2D conversion pattern         |
| a2d_hi         | reg    | 1eh                        | ;A2D conversion result MSB           |
| a2d_low        | reg    | 1fh                        | ;A2D conversion result LSB           |
| a2d_flags      | reg    | 21h                        | ; conversion flags                   |
| bip_flag       | reg    | 21h.3                      | ; set=bipolar; rest=unipolar         |
| diff_flag      | reg    | 21h.4                      | ;set=differential;reset=single-ended |
| channel        | reg    | 23h                        | ；current channel register            |

## MAX180 Evaluation Kit

```
TTL2 'subroutine -CONVERT" convert equ $ push A push DPH push DPL ; Select the channel and the differential-single-ended mode and t ；bipolar/unipolar mode. Aow IO_PORT #TIC_TOC+nBUSY ；turns off the HBEN bit ； so a conversion can start A,channel ；gets the channel #into the 3 LSBs A, a2d_flags ;ORintheBIPandDIFFbits DPTR,#max180 ;points at the A2D converter @DPTR，A ;starts the conversion ；first waits for BUsY to go LoW,then waits for BUsY to go HI conv_wait4low equ $ ; If these WAITS take jb b_nBUsY，conv_wait 4low ；too long，the watchdog conv_wait4hi equ ;timer resets the μP. jnb b_nBUSY,conv_wait 4hi ;fetchesandstorestheLSbyteand the Msnibble movx A,@DPTR ；fetches the LS Byte mov a2d_low,A ;stores it mov A, #nBUSY+HBEN ;enables the high byte XAOW A, @DPTR ;fetches the MS byte anl A， #0fh ；turns off the high nibble AoW a2d_hi,A ；stores the Ms nibble dod DPL pop DPH dod A ret
```

<!-- image -->

## Kit 2. MAX180

## MAX180 Evaluation Kit

For D25 (25-pin) to D25 connectors (a straight-through cable can be used):

Terminal Connector (DTE) (DCE)

MAX180 Connector

| Signal   |   Pin | Pin        | Signal   |
|----------|-------|------------|----------|
| Ground   |     1 | 1          | Ground   |
| TxD      |     2 | 2          | RxD      |
| RxD      |     3 | 3          | TxD      |
| RTS      |     4 | 4          | RTS      |
| CTS      |     5 | 5          | CTS      |
| DSR      |     6 | 6          | DSR      |
| Ground   |     7 | 7          | Ground   |
| DCD      |     8 | 8          | DCD      |
| DTR      |       | 20 --.. 20 | DTR      |
| RI       |       | 22         | R1       |

22 ---.

For D9 (9-pin) to D25 (25-pin) connectors (standard adapters are available for this configuration):

| Terminal Connector(DTE)   | Terminal Connector(DTE)   | MAX180 Connector(DCE)   | MAX180 Connector(DCE)   |
|---------------------------|---------------------------|-------------------------|-------------------------|
| Signal                    | Pin                       | Pin                     | Signal                  |
| DCD                       | 1 -- 8                    | 1 -- 8                  | DCD                     |
| RxD                       | 2 3                       | 2 3                     | RxD                     |
| TxD                       | 3 2                       | 3 2                     | TxD                     |
| DTR                       | 4 == 20                   | 4 == 20                 | DTR                     |
| Ground                    | 5 7                       | 5 7                     | Ground                  |
| DSR                       | 6                         | 6                       | DSR                     |
| RTS                       | 7 4                       | 7 4                     | RTS                     |
| CTS                       | 8 5                       | 8 5                     | CTS                     |
| RI                        | 22                        | 22                      | RI                      |

For Macintosh mini 8-pin to D25 connectors: Terminal connector(DTE) MAX180 connector(DCE)

Signal

DTR

TxD

CTS

Ground

RxD

not used

not used

not used Pin

1-

3

2

4

6

5

7

8

The board supplies DATA SET READY(DSR), CLEARTO SEND (CTS), and CARRIER DETECT(CD)to the interface at all times when it is powered up.

The board ignores the REQUEST TO SEND (RTS) signal from the terminal. The signal is brought at RS-232voltage levels to a marked pad, and can be used for prototyping.

6

Pin

20

2

5

7

Signal

DTR

TxD

CTS

Ground

RxD

As the board is shipped, the DATA TERMINAL READY (DTR) signal is alsoignored by the board. If the DTE-CTL jumper is cut, however, DTR tums the board power on and off, assuming the on/off switch is in the on position. This optioncauses theboard topowerdownwhenyou tumoffyourdumbterminalorexityourterminalemulation program. This function is useful for battery-operated systems.

## Autobaud

Before turning on the evaluation board, set your terminal for an 8-Bit, no-parity,full-duplex operation. You can set your terminal to any standard baud rate from 300Bd to 9600Bd.

Maxim supplies the Sercomm terminal emuiation programfor operationwithMaxim'sEVkits. The SERCOMM.EXE program on the diskette can be copied to a hard disk drive or started from the floppy disk.The program will display a help menu for the availabie options.

When the board is first powered up, the firmware does someinitializationandthenentersanautomaticbaud ratedetectionloop.Theautobaudroutineexaminesthe firstcharacterreceivedtodeterminetheincomingbaud rate.

## THEFIRSTCHARACTERYOUTYPEAFTER POWER-UP MUST BE A SPACE.

The space character (20 hex) is expected by the autobaudroutine.Sendinga differentcharacterwill almost certainlycausetheboardtocalculateabaudratedifferent from that of your terminal, and gibberish will appear on your screen. If you inadvertently press another key first, turn the board off, then back on to correct the problem.

Oncethecommunicationlinkisestablished,themonitor displays itssign-onbannerand aprompt.Thebanner consists of the copyright notice and the ROM version information. The message will look something like this:

```
MAXIM INTEGRATED PRODUCTS,1992 Version 1.00Released January 9, 1992
```

After the log-in procedure is completed, the system displays a descriptive prompt.

Prompt

The monitor's prompt takes theform:

"MAX180:&lt; current output format: current input mode: channel number &gt;*

wherecurrentoutputformatis HEX, DEC or BIN, the current input mode is either UNI or BIP, and the current channel number is in the following set:

{0...7}

for single-ended operation

or

{0/1, 1/0, 2/3, 3/2,

4/5, 5/4, 6/7, 7/6) for differential operation.

The monitor has commands to set the current output and input modes and the current channel number.  These commandswillbediscussed intheCommandSetsection.

You can determine the monitor's current operating mode by simply looking at the prompt. For instance, if the prompt reads

## MAX180:HEX:BIP:0/1&gt;

you know that the MAX180 is encoding data using signed twos-complement 12-bit coding and the output format is in ASCll hexadecimal. The input is in differential mode using the channel 0/1 analog input pair.

## Command Set

The monitor has an 8-byte input buffer. The monitor will returntheerrormessage'?'ifmore than8charactersare sent to the monitor without an ENTER (the carriage return character). You will aiso receive the error message if the monitorreceivesanunknowncommand.Allcommands are single characters followed by ENTER (carriage return). The'?command accesses help.The help screen lists all the commands displayed in functional groups, as follows:

- ?- Help screen

Display Output Mode Selection Commands:

- H-Hexadecimal format
- D - ASCll decimal format
- ^B － Binary values (12bits/2bytes, MSByte 1st)

MAX180 Conversion Mode Selection Commands:

- B -Bipolar mode
- U - Unipolar mode

## MAKECONVERSIONCommands:

- C - Continuously converts and displays until any key is pressed
- M - Makes a single conversion and displays result; a NULL command (i.e. just CR) also makesaconversion.

<!-- image -->

## MAX180 Evaluation Kit

Channel SelectCommands:

Dl - Differential input mode

0...7 - Selects channel number

SE - Single-ended input mode

## RAM Related Commands:

S - Stores conversions in RAM buffer until full

R - RAM test

- O - Outputs the values stored in RAM buffer

The RAM Related commands 'S' and 'O' appear only if theRAMchipisontheevaluationboard.

The Display Output Mode Selection commands are used to set the display format of the MAX180 conversion results. When the MAX180 performs a conversion, the result is always 12 bits long. The 12 bits of data are presented as follows:

## H-Hexadecimal format

The 12-bit value is converted into ASCll hexadecimal format with a dynamic range of'ooo' to 'FFF.The current input mode has no effect on the output data in HEX mode. This means'FFF'equalsacountof-1ifthecurrent input modeisbipolar(BiP)or4095counts if the input mode is unipolar (UNI).

## D-ASCllDecimal format

The 12-bit value is converted into ASCll decimal format. The dynamic range depends on the current input mode, as follows:

INPUT MODE OUTPUT VALUE RANGE (V)

Unipolar (UNI) 0 ... 4.999

Bipolar(BIP) -2.500...2.499

^B (Control B) - Binary values (12bits/2bytes, MSByte 1st)

The ^B command causes the binary values to be output as raw binary data (i.e. unformatted) in a 2-byte packet. The first byte has 4 leading Osfollowedbythemostsignificant4bitsof the conversion. The second byte holds the conversion'sleastsignificant8bits.

As with the HEX output mode, the input mode does not change the data's format. The dynamicrange of the output,expressed as a binary-bit pattern, is:

0000 0000 0000 0000 ... 0000 1111 1111 1111

## MAX180 Evaluation Kit

Input mode is useful when capturing data to a disk log file, but do not send this data to your display screen, because the binary valueswillhaveunpredictableeffectsonyour screen.

The Conversion Mode Selection commands are used to tell theMAX180whichdatatransferfunctionitshoulduse topresent the conversionresult.

## B -Bipolar mode

Inbipolarmode,theMAX180outputsasigned 12-bit twos-complement number. The MAX180 is now operating in differential mode.See the MAX180datasheetforadiscussionofdifferential input, output data format, dynamic performance, and unipolar/bipolar transfer functions.

- U - Unipolar mode

Unipolar mode is the monitor's default operating mode. The input voltage ranges from oV to +4.999V.

The following commands are used to select the current analog input configuration:

## {0..7} - Selects the current channel

The monitor is commanded to make the typed number the current channel.The monitorwill respondbychanging thepromptto therequested channel number. If the current input mode is differential, the response will be with the channel pair number. That is, if channel 0 is selected, the prompt will reflect channel 'o/1' as the current channel.

## DI -Differential input mode

Analog input channels arepaired.Instead of8 single-ended analogchannels,thereare 4differential analog channels.

Note: The differential input does not imply bipolar coding, which is selected with the B command.

## SE - Single-ended input mode

Analog input channels are single ended; that is, the input voltage is measured with respect to analog ground rather than another one of the MAX180's input channels.

Note: The single-ended input does not imply unipolar coding, which is selected with the U command.

Themain function of the EVkit is to cause theMAX180 to make a conversion and to display the results.

M - Makes a single conversion and displays result.Acarriagereturnwithnoothercharacter also makes a conversion.

TheMAX180iscommanded tomakeoneconversionin the current input mode, and the result is displayed in the current outputmode.

- C - Continuously converts and displays result

Conversions continue until a key is pressed.

Ifyourterminalcannotacceptthedataatfullspeed,data will be lost. The XOFF or any other character will terminate this command. If you have a problem, try operating your terminal at a slower baud rate. This warning also applies to the RAM output 'O' command.

The RAM Related commands are usefu! when the optional 8kbyte RAM chip is installed in the evaluation board.

## R-RAM test

The monitor continuously fills the RAM with the following bitpatternsand thenreadsthedatabacktoverifyRAM integrity.

|   BINARY | HEX   |
|----------|-------|
|          | 00    |
| 11111111 | FF    |
| 01010101 | 55    |
| 10101010 | AA    |

The RAM test runs until the monitor receives any character. The results are displayed as errors, which are detected at the beginning of each test pattern run.

- S -Stores conversions in RAM buffer

4096 conversions are made in the current mode (UNl or BIP) and theresults are stored in the RAM as raw 12-bit data.

- O - Outputs the values stored in RAM buffer The RAM's current contents are formatted through the current output mode (HEX,DEC or

BIN), and the results are sent to the terminal.

There are a few things to keep in mind when outputting thecontents of theRAM buffer.Ifyou usedecimal formatting, do NOT change between UNI and BIP input modes between the time you take a sample (S) and do the output (O), because the output coding will not match the input coding.

<!-- image -->

## Using the MAX181

The EV kit can also be used with the MAX181 DAS. Contact Maxim for a sample of the MAX181 to replace the MAX180 on the printed circuit board. The MUXOUT andADCINpinsoftheMAX181mustbeeithershorted togetheror connected to an external amplifier.Figure 18 of the MAX180/MAX181data sheet illustrates typical application circuits.

The design software does not detect the presence of a MAX181.Thedifference in operationwould occurwhenever&lt;channels6or7areselected&gt;.Theconversion readings are determined by the external circuitry.Table 1oftheMAX180/MAX181datasheetoutlinestheinput multiplexer's state.

## Power Requirements

The MAX180 evaluation board can be powered by a 9V alkaline battery or by an external DC power supply. lf an external power supply is used, the input voltage must be between 6.0V and 11.0V.

The evaluation board draws 50mA to 80mA when operated with normal memory-cycle lengths. The current requirements increase with extended memory-cycle decodingandwithcurrentdemandsofthecircuitryadded intheprototypearea.Thetotalcurrentload mustnot exceed thelimitsof theMAX667.Refer to theMAX667 data sheet if additional current is being drawn by your circuits.

## Jumper Options

Two jumper blocks permit shunts to be set on or off to affecttheboard'soperation.Inaddition,3 tracescanbe cut and a wire jumper can be soldered in to set options on the board.

## Cycle-Length Jumper Block

In the normal configuration, the address decoder's outputs (U1, 74HCT138) are asserted only for the duration of the80C32'sRD,WRorPSENsignals.Thisenablesthe ROM and RAM devices only for short periods of time. For this mode, place the JU5 shunt between pins 1 and 2.

If U1's pin 5 is grounded, the output stays asserted from the time memory in a specific block is first accessed until memory in anotherblock is accessed. This increases the board's current requirements to approximately 150mA, and the input voltage range must be limited (see the MAX667 data sheet). It is recommended that this option be used onlyif additional circuits require long addressenable signals.

## MAX180 Evaluation Kit

## Watchdog-Enable Jumper Block

Watchdog-enable jumper JU4 is normally installed. In this watchdog-enable mode, the μP will automatically reset if itsfirmwarefailstosenda heartbeat transition to thewatchdog.Removethisshunttodefeattheautomatic reset feature (usually for firmware development).

## DTE-Control Jumper

If the DTE-control jumper is cut, use the terminal's DTR signaltoturn theevaluationboardonandtoresetit.The board ignores the DTR if the jumper is not cut.

## External Reference Jumper (JU3)

JU3isshortedwhentheboardisshipped,whichenables theinternal reference.Cutthetracebetween thepads on the solder side of the PCboard todisable the internal reference. An external reference can then be applied to the JU3 pad closest to the MAX180.

## Reference and Offset Adjust (JU1, JU2)

JU1 and JU2 are shorted on the evaluation board, which applies VpD to therespective inputs.Either trace can be cut (on the solder side of the PC board), and a pad is provided for each to allow thereference adjust and offset adjust tobe activelydriven.

## Board Assembly

The MAX180 EV kit is shipped unassembled. The assembly tools needed are a small tipped, grounded soldering iron, wire cutters, and a screw driver. You should have basic prototyping skills such as soldering and determining component vaiues.Follow the directions carefully and verify your work at each step.

Note: Trim the leads of the diodes,resistors,and capacitors after they are soldered in position.

1. Remove the board and parts from the box. Check against the component list to verify all parts are present.
2. Insert and solder the diodes in place. Be sure to alignthecathodebandonthediodewiththemarkings on the printed circuit board.

CR1, CR2 ...1N4001

CR3, CR4 ...1N4148

3. Insert and solder the resistors:

....10kQ5%

R3, R4 ..... ..100kΩ5%

6

## MAX180 Evaluation Kit

4. Insert and solder the 28-pin socket for U9, the 27C64 ROM.
5. Insert and solder the 40-pin socket for U6, the MAX180.
6. Insert and solder the nonpolarized capacitors.
7. Insert and solder the polarized capacitors. MAKE SURETHEPOSITIVETERMINALOFTHECAPACITOR ALIGNS WITH THE POSITIVE PAD (marked with a + sign).
8. Insert and solder the 11.059MHz crystal.
9. insert and solder the 330uH inductor L1.
7. 10.Mount and solderintoposition thepower switch, the power connector JU1, and the 25-pin RS-232 connector JU2.
11. Mount the battery holder into position using the double-sidedtape.Makesurethe2terminalleads go through the board. Solder the terminal leads.
12. Insert and solder Q1, the 2 resistor SIP packages RP1 and RP2. Align the marked end of the SIP with the marked end of the outline on the board.
13. Insert and solder the 2N7000 transistor. Align the casewiththeoutlinedrawnontheprintedcircuit board.
14. Insert and solder the following devices. Align the notchedendof thepackagewiththenotchedend of the outline on the board. Sockets may be soldered inforeachdevice.
15. Insert the 27C64 ROM and the MAX180 into their sockets.
16. Mount the 2-pin Jumper Block on JU4. Place a shunt across the two pins.
14. 17.Mount the 3-pinJumperBlock on JU5.Place a shunt across the two inside pins.

```
C3, C4 ...15pF C1,C5, C6,C6, C9, C10, C11, C12,C13, C16, C17, C19, C20, C21, C23 ..... . 0.1μF
```

```
C2, C7, C15 ..... . 4.7μF C8, C18 C14, C22 . ..100μF
```

```
RP1.. ..10kΩ RP2.... .100kΩ
```

| U1..    | .74HCT138   |
|---------|-------------|
| U2..    | 80C32       |
|         | .74HCT393   |
| U4.     | .74HCT373   |
|         | 74HCT245    |
|         | MAX667      |
| U8....  | MAX699      |
| U10...  | .6264       |
| U11.... | MAX233      |
|         | .74HCT7266  |
| U13..   | .MAX636     |

When assembly is complete, carefully examine the board for misinserted components and soldering faults. Remove excess flux and read the setup instructions.

## Trouble-Shooting Guide Digital Section

With a terminal attached to the D25 connector, apply power to the evaiuation board.Type a space before typing any other character. You should see the sign-on banner displayed on your screen in response to the space. lf you do not get the sign-on banner, use the following suggestions to isolate the problem.

If gibberish appears, either the terminal is not set to 8-bit, no-parity operation, or thefirst character sent to the board wasnotaspace. Resettheboardandpressthe terminal is in half-duplex mode.Change the setting to full duplex.

If there is no response check the following:

## Terminal Connection

RemovetheRS-232cablefromtheevaluationboardand connect pins 2 and 3 together. When you type on the terminal, you should see the characters echoing on the screen. lf not, the problem is somewhere in the terminal or cable.

## Power

Is there5Von the+5V prototype pads?Measure the +5Von theprinted circuitboard.Measurebetween the DGND and +5V traces found on the edge of the prototype area. If it is lower than 4.95V, verify the following:

Verify that the input voltage to the MAX667 (pin 8) is greater than 6.oV. if not, the problem is in the power source.

Are you using a battery? Is the battery good? Try a fresh 9V alkaline battery.Its loaded output voltage is typically greater than 7V.

If you are using an external power supply, is it turned on and connected with the proper polarity (positive to ViN).

If the MAX667 input (pin 8, &gt; 6V) is okay but its output (pin 2) is low, check the following:

Has the DTE-CTL trace been cut to enable DTR control of power? If yes, is DTR being asserted by your terminal? Reconnect the DTE-CTL pads and try again. Pin 5 of the MAx667 needs to be pulled down to 0V.

If the MAX667 output is 0V and it is warm, the output might be shorted.Examine the board for shorts and verify that all devices are inserted correctly.

## Microprocessor-Related Problems

If the 5V supply is okay, use a scope to check pin 5 of U3 (the 74HCT393) to verify that the oscillator is running. If not, the 80C32 or the reset circuit could be at fault.

Verity that P1.0 (pin 1 of the 80C32) toggles regularly. If not, the basic digital system is not operating properly. Check the following:

Verify that the RESET circuit is operating properly. Pin 7 of the MAx699 should be low for 100ms after power-up, then go high. If not, make sure that its output is not overloaded.

Verify that the ADO address line has a signal on it. if the μP is functioning properly, the address lines will change statesregularly.

Verify that theμP control lines are not overloaded.With a SCope,observe the operation of the PSEN,ALE,WR,and RD lines. The first two will toggle about every microsecond. The WR and RD lines will remain high while waiting for a character from the terminal.

Verify that the lower 8 bits of the address are being latchedbythe74HCT373.

<!-- image -->

## MAX180 Evaluation Kit

Verify that theROM outputof the address-decodelogic (pin 15 of the 74HCT139) toggles low during the PSEN pulse.

Verify that the signals are inverted as they are passed throughtheMAx233(seetheschematicforpins)and that the RS-232 levels on the 25-pin connector are correct.

## Analog Section

Iftheboardestablishescommunicationswiththeterminal but fails to make conversions, check the following:

Ifthe system hangswhenyou command it todoa conversion, check pin 29 of the MAX180 to be sure it is receiving itsdivided-downclock.

If the board returns readings but not the proper values:

Check the +5V (pin 40) and -12V (pin 15) of the MAX180/MAX181.CorrectifeitherareoutoftheMAX180 specifications.

Check the MAX180's reference voltage (pins 9 and 11). It should be -5.0oV. Check if jumper JU3 is out of range.

Check that the input voltage is on the active input channel.The channel canbe determined from theprompt. Make sure the input voltage is driving the correct channel.

lIfa MAX181is beingused, the MUXOUT and ADCIN pins must either be externally shorted together or properly driven(see the MAX180/MAX181data sheet).

Verify that the data-bus buffer (the 74HCT245) is being gated by the A2D-SEL and RD signals.

## MAX180 EV Kit

## MAX180 Evaluation Kit

<!-- image -->

MAX180WriteCycle

Consult the 80c32 data sheet for timing specifications.

12

MAXIM

<!-- image -->

Figure1b.MAX180SystemSchematic

<!-- image -->

<!-- image -->

Figure1d.MAX180SystemSchematic

<!-- image -->

Maximcannot assumeresponsibilityforuseofanycircuitryother thancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatent licensesare implied.Maximreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

16

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 (408) 737-7600