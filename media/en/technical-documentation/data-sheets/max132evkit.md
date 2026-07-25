<!-- lastmod 2022-08-03 -->
## General Description

TheMAX132evaluationkit(EVkit)containsafullyassembledandfunctionalprintedcircuitboardwitha MAX132 ADC,80C32 micr0controller,MAX699 microprocessor supervisor, MAX233 RS-232 interface, and allothercomponentsneededfor an18-bitDAS. 8kbytes of EPROM contain the 80C32 program code, and an additional 8kbytes of CMOS RAM is included to store conversion results. A prototyping area of 5in? is reserved for breadboarding, signal conditioning or other application-specific circuits.

The kit operates from a single +5V supply, and links to an IBM-compatible personal computer through anRS-232 link.Commandsenteredonthekeyboardaresenttothe EV kit board, and conversion results are returned for display. All required IBM-compatible software is included.

## IMIXYIM

## MAX132 Evaluation Kit

## Features

- FullyFunctional 18-Bit ADC
- +5V Input Range
- IBM-Compatible Software Included
- Single +5V Supply Operation
- Complete 80C32 CodeListing Provided

## Ordering Information

| PART            | TEMP.RANGE   | BOARDTYPE                 |
|-----------------|--------------|---------------------------|
| MAX132EVKIT-DIP | 0°℃ to +70°℃ | Plastic DIP-- ThroughHole |

## EV Kit

<!-- image -->

WIXVW

MaximIntegratedProducts

Call toll free 1-800-998-8800 for free samples or literature.

## MAX132 Evaluation Kit

| DESIGNATION                               |   QTY | DESCRIPTION                     |
|-------------------------------------------|-------|---------------------------------|
| C3,C4, C8,C9                              |     4 | 15pFceramic capacitors          |
| C31                                       |     1 | 0.047uFmonolithic capacitor     |
| C5,C16, C17, C18,C21,C22, C27,C28,C29,C30 |    10 | 0.1μF 50Vmonolithic capacitors  |
| C10,C15,C23                               |       | 1.0μF 50V monolithic capacitors |
| C13                                       |     1 | 4700pFpolystyrenecapacitor      |
| C14                                       |       | 0.1μFpolypropylene capacitor    |
| C12                                       |     1 | 4.7μFelectrolytic capacitor     |
| C11, C24, C26                             |     1 | 10uF electrolytic capacitors    |
| C19                                       |     1 | 100uFelectrolyticcapacitor      |
| CR1                                       |     1 | 1N4001diode                     |
| F1                                        |     1 | 0.5A picofuse                   |
| J1                                        |     1 | 2-pinpowerconnector             |
| J2                                        |     1 | DB25right-angle connector       |
| J3                                        |     1 | 26-pin IDC header               |
| JU3                                       |     1 | 2-pin jumper header             |
| R6                                        |     1 | 604kΩ 1% resistor               |
| R8                                        |     1 | 120kΩ 1% resistor               |
| R9                                        |     1 | 40.2kQ 1% resistor              |
| R10                                       |     1 | 100kΩ 1% resistor               |
| R11                                       |     1 | 100kΩ trim pot                  |
| R12                                       |     1 | 510Ω5%resistor                  |
| R13                                       |     1 | 1.13kΩ 1% resistor              |

## Quick Reference

Setup and operation of the MAx132 EV kit involves the following steps:

1. Copy the MAx132 EV kitfloppy disk to a blank disk oradirectoryona harddiskandstoretheoriginal in a safe place. Use the copyfor normal operation.
2. Read the README file for updates and changes tohardwareand/orsoftware.
3. 3.Connect a cable between a serial port (COM1 or COM2)ofthepersonalcomputerand theMAx132 EV kit. If a 25-pin (D25) connector is available,a straight-through cable can be used. If only a 9-pin (D9) connector is available, an adapter is required.
4. Start the SERCOMM program on the personal computer (type "SERCOMM") and set the indi-

## Component List

| R14     |   1 | 10.2kQ1%resistor                                     |
|---------|-----|------------------------------------------------------|
| RP1,RP2 |   2 | 10kQ2 10-pin 9-resistor SIP                          |
| S1      |   1 | Power switch                                         |
| U1      |   1 | MAX132                                               |
| U2      |   1 | 74HCT138                                             |
| U3      |   1 | ICL7660                                              |
| U4      |   1 | 74HCT373                                             |
| U5      |   1 | 80C32                                                |
| U6      |   1 | MAX699                                               |
| U7      |   1 | MAX233                                               |
| U8      |   1 | 74HC7266                                             |
| U9      |   1 | 27C64                                                |
| U10     |   1 | 6264LP                                               |
| U11     |   1 | MAX872                                               |
| Y1      |   1 | 11.059MHz crystal                                    |
| Y2      |   1 | 32.768kHzcrystal                                     |
| N.A.    |   1 | 28-pin,0.600"IC socket for EPROM                     |
| N.A.    |   1 | Shunt                                                |
| N.A.    |   4 | Mountingposts                                        |
| N.A.    |   8 | 4-40× 1/4" screws                                    |
| N.A.    |   4 | Rubberfeet                                           |
| N.A.    |   1 | 8.5"X5.0"printed circuit board                       |
| N.A.    |   1 | 8.5"×5.0"blankcircuit board for ground plane(shield) |

- cated activeport to agreewith the cable location (menu-driven).
5. Connect a +5.0V supply to the MAX132 EV kit printed circuit board and turn on the power.
6. Type a SPACE to initialize the communication between thepersonal computer and the EV kit.The board shouldrespond with a logonmessage.
7. Enter a "?" for a list of the available software commands.Acompletelistcanalsobefound in theSOFTWARE.DOCfileonthedisk.
8. Connect an input source between the IN Hl and the IN LOpads on the printed circuit.The input voltagehasa±512mVrange.Because theinput voltageisattenuated10:1byaresistordivider before going to the inputof theMAx132,±5V canbe applied to theEVkit input.

WIXVИ/

2

## Hardware Description

The following is an overview of the various circuits found on the MAX132 EV kit.Since it is impractical to fully documenteachdeviceinthismanual,pleaserefertothe individual data sheets for complete descriptions.

## RS-232 Interface

TheRS-232interfaceconnectsanexternalterminaltothe evaluation board.The MAx233 +5V-powered,RS-232 transmitterandreceiverinterfaceICperformsthelevel shiftingrequiredbetweentheseriallinkandthe80C32 serial port.Thereceiver input shifts the ±10VRS-232 levels to TTL levels.And the transmitter side shifts TTL. levels to ±10v.

## 80C32 Microcontroller

TheMAX132 EV kit uses the 80C32 8-bit microcontroller. The80C32isamemberof the8051family thatrequires external EPROM forprogram storage.Internally,it has 256 bytes of RAM and four 8-bit input/output (l/O) ports. On the EVkit,two of theseports(P0andP2)are used for addressanddatalinestotheexternalEPROMandRAM. A third (P3) is needed for the RS-232 serial link and memory control. The remaining port (P1) communicates with the MAx132, toggles the watchdog input, and senses the 50Hz/60Hz jumper.

Theuser initiates conversions using thepersonal computer keyboard by running a terminal emulator program suchasSERCOMM.The 80C32receives the instruction over the RS-232 link,performs the conversions and returns theresultsfordisplay.

The EVkitincludes8kbytesof EPROM(the27C64)tohold the 80c32 instructionsfor normal operations，and 8kbytes of CMOS RAM (the 6264) to store conversion results.

## MAx699 Microprocessor Supervisior

The MAx699 low-cost power-onreset and watchdogtimercontrollerprovideson-boardsystemsupervisionfor the microprocessor (μP). The MAx699 generates a RESET signal at power-up and whenever the μP's firmwarefails togenerate a transition on thewatchdog input at least once a second. The watchdog input is connected to bit 0 of port 1 (P1.0) through JU3.The watchdog function can be defeated for debugging by removing the shunt acrossJU3.See the MAx699data sheetformoreinformation.

## MAX132

TheMAx132/80C32serialinterfaceiscontrolledbyfive bits on port 1 of the 80C32 (P1.1 to P1.5). The function of

<!-- image -->

WIxYW

## MAX132 Evaluation Kit

each pin is given in Table 1. Data is transferred in both directions during\_each cycle. A data cycle starts when the Chip Select (CS) pinis taken low and the data field advances as the clock (SCLK) cycles eight times.The input field sets the MAx132operating mode and selects thedataregistertooutputduringthenextdatacycle (seeTable1and Figure 1).Referto the MAx132data sheet for a full description.

Aresistordividerisconnected totheMAx132's inputso thataninputof±5.12Visreducedto±512mVfortheADC. An input filter consisting of a 100kΩ2 resistor and 0.10μF capacitor (R10 and C22) is also provided. The input divider is provided toincrease the ±512mV input range to ±5.12V.This makes evaluating the MAX132's accuracy and resolution easier. The divider circuit can be removedformostuserapplications.

## Table 1. 80C32 Port 1 Bit Functions

| BIT   | DESIGNATION   | FUNCTION                                                                                        |
|-------|---------------|-------------------------------------------------------------------------------------------------|
| P1.0  | TIC-TOC       | Continuoustransitions to the MAx699forwatchdogcontrol                                           |
| P1.1  | A2D-CS        | MAX132 chip-select driver                                                                       |
| P1.2  | A2D-DIN       | Data to the MAX132 DIN pin                                                                      |
| P1.3  | A2D-DOUT      | Data from the MAX132 DOUT pin                                                                   |
| P1.4  | A2D-SCLK      | ClocksignalforMAx132data transfer                                                               |
| P1.5  | A2D-EOC       | End-of-conversion signal from theMAX132                                                         |
| P1.6  | Not used      |                                                                                                 |
| P1.7  | 60Hz/50Hz     | Normallyhightosignify60Hz jumperacrossJU2toselect operation.Ground by placing a 50Hz operation. |

## MAX872Reference

TheMAX132EVkit uses a MAx8722.5Vreference.The MAx872's 2.500V output is divided down to +545mV for the MAX132reference input(60Hz operation).A trim pot (R11) is provided for final trim voltage adjustment. For 50Hz operation, adjust the potentiometer for a reference voltageof655mV.RefertotheMAx132datasheetfora fulldiscussionofreferencevoltageselection.

## MAX132 Evaluation Kit

## Software Description

TheMAX132EVkit softwareconsistsof twoelements.One is the80C32codestoredintheEPROM.Theotheris the SERCOMMterminalemulatorprogramthatrunsonan IBM-compatiblecomputer.The 51/4"floppy disksupplied withthekitcontainsthesourcefileforthe80C32code,the SERCOMM program,and documentation.Be suretoreturn the registration form to receive future updates.

## The SERCOMMProgram

Maxim supplies the SERCOMM terminal emulation programforoperationwithMaxim'sEVkits. The SERCOMM.ExE program on the diskette can be copied to a hard disk drive or started from the floppy disk.The availablecommands.Aterminalemulatorprogramother thanSERCOMMcanbeusedif it issetfor8-bit,no-parity, full-duplex operation. To start the SERCOMM program, setDOStothediskordirectorywhereSERCOMM.EXEis located,then type"SERCOMM".

## EPROMFirmware

The 80C32 code was written using an 8051 assembler from2500AD Software(phone 719-395-8683).The operating code is stored in a 27C64 EPROM located on theprinted circuitboard.Available commands areoutlinedintheCommandSetsection.

Whentheboard ispowered up,the firmware initializes and then enters an automatic baud-rate detection loop. Theautobaudroutineexaminesthefirstcharacter received todeterminetheincomingbaudrate.

## THEFIRSTCHARACTERTHEBOARDRECEIVES AFTERARESETMUSTBEASPACE.

Thespacecharacter(20hex)isexpectedbythe autobaudroutine.Adifferentcharactercausestheboard to calculate an erroneous baud rate, resulting in garbled communications. If you inadvertently press another key, the board must be reset by cycling the power supply.

## ROM Program Interface

A prompt is displayed after every command is executed signifing that the system is ready for a new command. It prompt takes thefollowing form:

MAX132 LINE\_FREQ OUTPUT\_FORMAT OUTPUT\_MODE&gt;

The line frequency is determined by jumper JU2's condiassumes the 60Hzmode.If jumper JU2is shorted,the system will set the 50Hz bit in the MAX132 status register.

The output format is either hex or binary. The screen display is normally in the hex format. The binary mode returns the conversion results as a binary value. Since these results are not in ASCll form, displaying these valuesonyourterminalwillcauseunpredictableresults. Thebinarymodeshouldonlybe used to collect data to a data file (future program expansion).

Theoutputmodeiseithernormalorextended.The normal modedoesnotdisplaythethreeextendedLSBs. The polarity of the displayed result is set by the polarity bit intheMAX132outputstatusregister.Note thatthe most significant bit (MSB) cannot be used as apolarity indicator. Table 2 illustrates therange of bits B18-B3 and the polarity bit.

Table 2. Output Values (Offset Corrected)

| Input Device   | Displayed Reading   | Decimal Counts   |
|----------------|---------------------|------------------|
| +640mV         | +A000               | +40960*          |
| +576mV         | +9000               | +36864*          |
| +545mV         | +8840               | +34880*          |
| +512mV         | +8000               | +32768           |
| +448mV         | +7000               | +28672           |
| +384mV         | +6000               | +24576           |
| +320mV         | +5000               | +20480           |
| +256mV         | +4000               | +16384           |
| +192mV         | +3000               | +12288           |
| +128mV         | +2000               | +8192            |
| +64mV          | +1000               | +4096            |
| +15uV          | +0001               | +1               |
| 0              | +0000               | 0                |
| -15μV          | -FFFF               | -1               |
| -64mV          | -F000               | -4096            |
| -128mV         | -E000               | -8192            |
| -192mV         | -D000               | -12288           |
| -256mV         | -C000               | -16384           |
| -320mV         | -B000               | -20480           |
| -384mV         | -A000               | -24576           |
| -448mV         | -9000               | -28672           |
| -512mV         | -8000               | -32768           |
| -545mV         | -77C0               | -34880*          |
| -576mV         | -7000               | -36864*          |
| -640mV         | -6000               | -40960*          |

*Soft Overrange Operation

NOTE:TheMAX132exhibits additionalerrorswhenoperating Inthesoftoverrangearea.Operationinthisregionis notincluded inthespecifications.The softoverrange values listed inTable2donot include error correction.

<!-- image -->

## Command Set

The following keyboard commands are available for controlling the MAx132 EV kit.Type a question mark("?")to view thehelplist(shownbelow)whenevertheboardis operational.Besure torefertothediskdocumentation for possible changes to the command list.

## HELP LIST

Output Display Format Selection Commands:

H-Hexadecimal format

^B-Binary format

Z [0,1,2,4,.,32] - Set averaging count and read internal zero

Output Display Mode Selection Commands:

- N - Normal 16-bit display
- E - Extended 18-bit display

## Conversion Initiation Commands:

- M -Make a single conversion and display the results.A carriagereturn mayalsobeused.
- CContinuously convert and display until any key is pressed.
- P [0...F] - Set MAX132 user-programmable output bits

## RAM-Related Commands:

- R- RAMtest

- S- Store conversions in RAM buffer

- Output the values stored in RAM

## Output Display Format Selection H-HexadecimalFormat

The conversion results are normally displayed in hexadecimalformat.ThepolaritybitfromtheMAx132 statusregisterisdisplayed asaleadingplusorminus sign.The lower three data bits that are output as part of theMAx132statusregisterarenotpartofthenormal extendeddisplayformat.

## ^B-Binary Format

Thebinary output format is not for display. It is intended forquicklycapturinglargedata samplesin a non-ASClI format. Sending binary format to a screen will yield unpredictable results, since binary format data may be misinterpretedascontrolcharacters.

<!-- image -->

## MAX132 Evaluation Kit

Z [0,1,2,4..,32] - Set the Averaging Count andSampleInternalZero

Setsthenumberofsamplestoberead and averagedfor each display cycle, and reads the internal offset value. Thisoffsetreadingisstoredandsubtractedfromallfuture conversion results. The number of samples must be a power of 2, less than or equal to 32 (1,2,4,8,16 or 32). Entering just "Z" will sample the zero reading using the offset correction may be turned off by entering "Zo".

- Z.. Display the current averaging count and take anewzeroreading.

ZO .... Turn off averaging and zero correction.

- Z1-32... Set the averaging count and take a new zero reading.

## Output Display Mode Selection

## N-Normal16-BitDisplayMode

Set the display mode to the 16-bit hexadecimal format. The three least significant bits (LSBs)in the MAX132 indicated as a leading "+" or "-" sign.

Normal Hexadecimal Display:

<!-- image -->

## E-Extended18-BitDisplayMode

Sets the display mode to show all bits. Bits B18-B3 are displayed as an octal number following a decimal point.

Extended Hexadecimal Display

<!-- image -->

## MAX132 Evaluation Kit

## Conversion Initiation Commands

## M-Make aSingle Conversion

Initiate a single conversion cycle by typing an "M" or a carriagereturn.Eithermethodwillreturntheconversion

## C-Continuously Convert

Conversion cycles will repeat until any key on the keyboard is pressed.

## P [o...F]-SetUserProgrammable Bits

The MAX132 has four programmable output pins that may be used to control external muxes or logic circuits. The pin outputs are set by entering a "P" followed by a hex number representing the four bits. For example, entering "PA" would set bits P3 and P1 (1010 hex).

## RAM-RelatedCommands

## R-RAMTest

The CMOS RAM located on the printed circuit board is filled with bit patternsand thenreadtoverifyperformance. The system will announce any errors encountered. The RAM test repeats until a key on the keyboard is pressed.

## S-Store theConversions inRAM

The conversion results are sent to the RAM instead of the display.Collection continues until 2048 samples have been collected or any key is pressed.

## O-OutputtheValuesStored inRAM

TheconversionresultspreviouslystoredinRAMare retrieved for display.

## Applications Information

## Power-Supply Requirements

The printed circuit board for the MAX132 EV kit requires a single 5.0V ±5% supply.Avoid using a noisy supply (a linear supply is preferable to a switching type). The typical supply current is 75mA(note that the MAx132 draws only 60μA typ). The MAX132 requires dual ±5V supplies, and an 1CL7660 charge- pump voltage inverter is included on the board to generate the -5V supply.

## Noise Reduction Techniques

The analog circuitry surrounding the MAx132isextremely susceptible to noise pickup from external sources. The usershouldtakethefollowingprecautionsinthefinal product.

1. The user's product should shield the MAX132 circuitry as much as possible.A ground plane connected to analog ground should surround the MAX132analogsection.
2. The integrator resistor (RINT, R6) should be a metal-film low-noiseresistor.
3. The MAx132 should have decoupling capacitors as close to the MAx132 supply pins as possible.
4. The input resistor, and any input divider, should be located close to the MAx132 to minimize input trace length.
5. The printed circuit board trace on the integrator input (pin 21) should be as short as possible. This high-impedance node is subject to noise pickup.
6. The MAX132 digital lines should remain static while a conversion is in progress. The user shouldmonitortheMAX132EOCsignal todetermine when a conversion is complete.
7. An external ground plane is included in the EV kit. When placed beneath the main circuit board, a ground shield can reduce noise by several microvolts ormore.
8. 8.A low-noisereference suchas theMAx872(included in thekit)isrecommended.
9. The digital signal traces should be kept away from theMAx132analogsection.
10. Lowest noise is achieved by averaging multiple conversions(see the MAx132 data sheet).
11. To avoid ground loops and noise coupling. the analog and digital grounds should return separatelytothepowersupplyground.Forlowest alsoberoutedseparately.

## AttachingtheTerminal

TheMAx132EVkitconnectstoapersonalcomputervia an RS-232 cable.Both 9-pin and 25-pin connectors are widely used for RS-232 serial ports on IBM-compatible computers.A 25-pinconnector is used ontheMAx132 EV kit. If a 25-pin serial port is available on the user's PC, only a simple cable is required. If only a 9-pin serial port is available,anadapter(found at most computerstores) is required.

<!-- image -->

## JumperSelections

TwofunctionsarealteredbyjumpersontheMAx132EV kitprintedcircuitboard.JumperJU2selects50Hz/60Hz operation. The kit is shipped with JU2 open (60Hz mode). To select 50Hz mode, install a piece of wire across JU2. Thekitalsoincludesa 2-pin headerforJU3.Installing the shuntacrossthetwopinsconnectstheMAx699's watchdog input toP1.0of the80C32.If the shunt is installed,the80c32musttoggleP1.0everysecondto prevent theMAx699fromresetting thesystem.If the jumper is opened, the MAx699 watchdog function is disabled.TheMAx699willcontinuetoresetthe80C32

## Table3.EVKitJumperSelections

| JUMPER NUMBER   | FUNCTION           | JUMPER OPEN   | JUMPER SHORTED   |
|-----------------|--------------------|---------------|------------------|
| JU2             | 50Hz/60HzOperation | 60Hz          | 50Hz             |
| JU3             | WatchdogFunction   | Disabled      | Enabled          |

## MAX132 Evaluation Kit

whenevertheinputvoltagedropsbelow4.75Vindependent of jumper JU3.

## Software Loading

Before doing anything else, make a copy of the disk provided with the MAX132 EV kit. Use the copy for all operations andkeep theoriginal inasafeplace.lf a hard diskisavailable,allfilescanbecopiedtoadirectoryand executed from there.

The disk contains a README file that lists any changes tothehardwareorsoftware.ReadtheREADMEfile beforeproceeding.Alistoftheavailablecommandsis containedin theSOFTWARE.DOCfile.

Be sure to fill out and return the User Registration form found on the disk. This will allow you to receive future EV kit updates.

<!-- image -->

Figure1a.MAX132Conversion andl/OSequence

<!-- image -->

## MAX132 Evaluation Kit

Figure1b.MAX132/80C32Detailed1/OCycle

<!-- image -->

WIXVW/

## MAX132 Evaluation Kit

<!-- image -->

Figure2.MAX132DemoBoardPowerSupply&amp;RS-232Interface

WIxYV/

## MAX132 Evaluation Kit

<!-- image -->

## MAX132 Evaluation Kit

<!-- image -->

Figure4.MAX132DemoBoardADConverter

WIXYW

## MAX132Evaluation Kit

Figure5.MAX132DemoBoard80C32CPUandMemoryInterface

<!-- image -->

MaximcannotassumeresponsibilityforuseofanycircuitryotherthancircuitryentirelyembodicdinaMaximproduct.Nocircuitpatcnthicensesare

12

Maxim IntegratedProducts,120SanGabrielDrive,Sunnyvale,CA 94086(408) 737-7600

1995MaximIntegratedProducts