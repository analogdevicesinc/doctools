<!-- lastmod 2022-08-02 -->
## MAX14906 Evaluation Kit

## General Description

The  MAX14906  evaluation  kit  (EV  kit) provides a proven design to evaluate the MAX14906, a four-channel industrial digital-output, digital-input device. The EV kit allows the MAX14906 to be configured on a per-channel basis as either a digital output (in High-Side switch or Push-Pull driver configuration) or a Type 1 and 3, or Type 2 digital input.  The  EV  kit  monitors  the  MAX14906  diagnostic information,  including  open-wire  condition,  state  of  the output  channels,  multiple  undervoltage  alarms,  global and  per-channel  overtemperature  alarms,  and  multiple fault alarms.

The EV kit must be powered from an external 24V DC power supply that can provide up to 6.4A (max), when all DOI\_ output channels are fully loaded with the option of 2x load inrush current.

The  MAX14906  EV  kit  communicates  with  a  graphical user interface (GUI) on a PC through a USB port. The EV kit features an on-board FT2232 controller interfacing to the MAX14906 control signals. Alternatively, an external SPI interface from a microcontroller or FPGA can be used through the 20-pin header (J13).

The MAX14906 EV kit comes with the MAX14906ATM+ installed in a 48-pin, 7mm x 7mm QFN package.

## MAX14906 EV Kit Board Photo

<!-- image -->

SafeDemag ™ is a trademark of Maxim Integrated Products, Inc. Windows ®  is a registered trademark of Microsoft Corporation.

## Features

- Easy Evaluation of the MAX14906 with Per-Channel Configuration
- SafeDemag TM for Safe Turn-Off of Unlimited Inductance in Digital Output Modes
- Configurable for IEC 61131-2 Type 1 and 3, or Type 2 Digital Input
- Support up to 3.75kV RMS Galvanic Isolation with MAX14483 and MAX14937
- Support Communicating with External Microcontroller or FPGA
- Allow Output Switching with High-Speed Parallel Interface or SPI Serial Interface
- Windows ®  10, Windows 8.1, and Windows 7 Compatible GUI Software
- Proven PCB Layout
- Fully Assembled and Tested
- RoHS Compliant

Ordering Information appears at end of data sheet.

Evaluates: MAX14906

<!-- image -->

## MAX14906 EV Kit Block Diagram

<!-- image -->

## MAX14906 EV KIT Files

| FILE                         | DESCRIPTION               |
|------------------------------|---------------------------|
| MAX14906EVKitSetupV1.0.2.ZIP | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX14906 EV kit
- 24V, 6.4A(max) DC power supply
- Windows 10, Windows 8,1, Windows 7 PC with a spare USB port
- USB A-to-micro-B cable

## MAX14906 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Note: In the following section(s), software-related items are identified  by  bolding.  Text  in bold refers  to  items  directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

- 1) Visit www.maximintegrated.com to  download  the latest version of the EV kit software, MAX14906EVKitSetupV1.0.2.ZIP or newer.
- 2) Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 3) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the MAX14906EVkitSetupV1.0.2.EXE program inside the temporary folder.
- 4) The program files are copied to your PC and icons are created  in  the  Windows Start  |  Programs  |  Maxim Integrated menu. During software installation, some  versions  of  Windows  might  show  a  warning message  indicating  that  this  software  is  from  an  unknown  publisher.  This  is  not  an  error  condition  and it  is  safe  to  proceed  with  installation.  Administrator privileges are required to install the USB device driver.

Evaluates: MAX14906

- 6) Verify  that  all  jumpers  are  in  their  default  positions (Table 1).
- 7) Connect the DC power supply between the EV kit VDD banana jack and GND banana jack. Set the DC power supply output to +24V, and then enable the output. Ob -serve that on the EV kit, the VDDOK and FAULT LEDs are on, indicating the EV kit is powered up.
- 8) Connect the USB A-to-micro-B cable from the PC to the EV kit board. A Windows message appears when connecting  the  EV  kit  board  to  the  PC  for  the  first time. Each version of Windows has a slightly different message.  If  you  see  a  Windows  message  stating ready to use , then proceed to the next step.
- 9) Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start  |  Programs  |  Maxim  Integrated menu. The EV kit software appears as shown in Figure 1 . Verify that the lower-right status bar indicates the EV kit hardware is Connected .  The GUI automat -ically detects that the EV kit is connected to the PC and enables serial communication. Any configuration change can be made on the Register Settings tab.
- 10) By default, SYNCH is enabled as seen in the Register Settings tab.
- 5) At  the  end  of  the  installation  process,  the  installer launches  the  installation  for  the  FTDI  Chip  CDM drivers.  Follow  the  instructions  on  the  installer  and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 11)  Select  the GlobalErr register  (0x07)  and  press  the Read Selected button once to read the default value of 0x1F. Press the Read Selected button for the second  time  to  clear  all  initially  detected  undervoltage global conditions in the GUI.

## Table 1. MAX14906 EV Kit Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                                                                                                                                            |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2              | Connect CRCEN to the V L supply to enable CRC on the SPI interface.                                                                                                                                                                   |
| J1       | 2-3*             | Connect CRCEN to GND to disable CRC on the SPI interface.                                                                                                                                                                             |
| J2       | 1-2*             | Connect the external V DD supply to V LED supply.                                                                                                                                                                                     |
| J2       | Open             | Use an external power supply for the V LED supply between the VLED test point and GND test point.                                                                                                                                     |
| J3       | 1-2              | Set chip LSB address bit A0 to 1 for the addressable SPI (needs to match the Address in the GUI).                                                                                                                                     |
| J3       | 2-3*             | Set chip LSB address bit A0 to 0 for the addressable SPI (needs to match the Address in the GUI).                                                                                                                                     |
| J4       | 1-2              | Set chip MSB address bit A1 to 1 for the addressable SPI (needs to match the Address in the GUI).                                                                                                                                     |
| J4       | 2-3*             | Set chip MSB address bit A1 to 0 for the addressable SPI (needs to match the Address in the GUI)                                                                                                                                      |
| J5       | 1-2*             | Connect V L to V 5 5V LDO output when REGEN is unconnected. If REGEN = GND, connect a 5V external supply between the V L test point and the GND test point to provide 5V to both V L and V 5 .                                        |
| J5       | Open             | Connect an external supply only on the V L test point, when REGEN is unconnected and V 5 is enabled as the LDO output. If REGEN = GND, connect the external supplies to both the V L test point and the V 5 test point, respectively. |
| J6       | 1-2*             | Connect EN to the V L supply to enable all DOI_ outputs.                                                                                                                                                                              |
| J6       | 2-3              | Connect EN to GND to disable/three-state all DOI_ outputs.                                                                                                                                                                            |

## Table 1. MAX14906 Board Shunt Positions and Settings (continued)

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                                                           |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| J7       | 1-2              | Connect REGEN to GND to disable the internal regulator. Connect an external 5V supply between the V 5 test point and GND test point. |
| J7       | Open*            | Enable the internal 5V regulator (V 5 is a 5V supply output).                                                                        |
| J8       | 1-2              | Connect V DD to V DD1 . The external pMOS transistor Q1 is not used and G1 is turned off.                                            |
| J8       | Open*            | V DD is connected to V DD1 through the external pMOS transistor Q1 for reverse current protection and G1 is turned on.               |
| J9       | 1-2              | Connect V DD to V DD2 . The external pMOS transistor Q2 is not used and G2 is turned off.                                            |
| J9       | Open*            | V DD is connected to V DD2 through the external pMOS transistor Q2 for reverse current protection and G2 is turned on.               |
| J10      | 1-2              | Connect V DD to V DD3 . The external pMOS transistor Q3 is not used and G3 is turned off.                                            |
| J10      | Open*            | V DD is connected to V DD3 through the external pMOS transistor Q3 for reverse current protection and G3 is turned on.               |
| J11      | 1-2              | Connect V DD to V DD4 . The external pMOS transistor Q4 is not used and G4 is turned off.                                            |
| J11      | Open*            | V DD is connected to V DD4 through the external pMOS transistor Q4 for reverse current protection and G4 is turned on.               |

- 12) Select Config1 register (0x0A) and set the SLEDSet bit  to  0  in  the Setting cell  to  autonomously  control all four STATUS LEDs by the internal logic. The font color of the modified register is changed from black to red. Click the Write Selected button to write the new configuration into the register.
- 13)  By default, the GUI is set for DO High-Side Mode.  In the System tab of the GUI, select the desired output mode  (High-side,  High-side  2x  Inrush  Current,  Ac -tive Clamp Push-pull or Simple Push-pull) and select On to set D\_ logic input high, thus the corresponding DOI\_ output is enabled/turned on. Notice that the cor -responding status LED (SLED\_) lights up.
- 14)  Select Off in the pulldown menu to set the D\_ logic in -put low to turn off the corresponding DOI\_ output. Verify that the SLED\_ is turned off, which indicates that the DOI\_ output is turned off.
- 15)  Repeat steps 13 and 14 to verify other DOI\_ outputs and check that the status LED (SLED\_) follows the input setting.
- 16) In the System tab select DI Mode for all DOI\_ chan -nels  in  the  pulldown  menu  in  the  first  column.  This configures the DOI1 to DOI4 channels to Type 1 and 3 digital-input mode (DI mode) and sets D1 to D4 log -ic pins to logic outputs.
- 17) Connect the negative terminal of the 24V DC power
7. supply  to  the  GND  test  point.  Connect  the  positive terminal of the 24V DC power supply to the DOI1 test point.
- 18) Using a voltmeter, verify D1 logic output is approxi -mately 5V by probing the D1 test point.
- 19) Set the DC power supply output to be less than 6V.
- 20)  Using a voltmeter, verify D1 logic output is approxi -mately 0V by probing the D1 test point.
- 21)  Repeat steps 17 to 20 to verify other DOI\_ input be -havior.

## Detailed Description of Hardware

The  MAX14906  EV  kit  allows  the  user  to  evaluate  all features and operational modes of the MAX14906, fourchannel digital-output, digital-input device.

## External Power Supplies

The EV kit is  powered  from  a  single  power  supply  and accepts a wide range of supply voltages, from 10V to 40V DC. The power is applied through two banana jacks, VDD (+) and GND (-).

The MAX14906 requires a 5V DC power supply on V 5 . It can be powered by the internal 5V linear regulator when the J7 header is left open. Alternatively, V 5 can be powered by an external 5V DC supply when J7 is in the 1-2 position. Refer to Table 1 for details.

## MAX14906 Evaluation Kit

The logic supply V L  defines the levels on all I/O logic pins. It can be powered by the internal 5V linear regulator when the J7 header is left open and J5 is in the 1-2 position. If a different logic level other than 5V is desired, for example 3.3V, an external power supply is needed to power up the V L pin through the V L  test point with a supply range of 2.5V to 5.5V. In this case, the J5 header should be left open.

Each DOI\_ channel is powered by their respective field supply V DD1 to  V DD4 .  Each V DD\_ is connected directly to V DD through jumpers J8 to J11 when all jumpers are closed. In this configuration, the external pMOS transis -tors Q1 to Q4 are not used and the gate driver outputs G1 to G4 are turned off. To protect the MAX14906 against high reverse-current flow into the DOI\_ pins and allow the DOI\_ input voltage to go above the V DD  supply voltage and not be clamped to one diode above the field supply, jumpers J8 to J11 are configured  in  open  position,  and the Q1 to Q4 pMOS transistors are turned on by enabling G1 to G4 gate driver outputs by setting the GDrvEn1 to GDrvEn4 bits to 1 in the OpnWrEn register (0x08).

## Power-Up Sequencing

- 1) Enable the +24V DC power supply.
- 2) Connect the USB A-to-micro-B cable from a PC to the EV kit board.
- 3) Start the EV kit software.

When the GUI is not open, the DOI\_ outputs are high due to the D\_ inputs being high since the device is in high-side DO mode by default. When the GUI is open, the software pulls D\_ inputs low and then DOI\_ outputs are also low.

## Digital Output Operation

In  the  Digital  Output  mode,  the  user  can  control  the D\_  logic  inputs  or  HighO\_  bits  to  enable  or  disable  the DOI\_  outputs.  The  specific  DO  mode,  such  as  Highside,  High-side  2x  Inrush  Current,  Simple  Push-pull,  and Active  Clamp  Push-pull  can  be  selected  in  the  pulldown menu  in  the System tab,  or  by  selecting  the  desired output mode by using DoMode\_[1:0] bits in the ConfigDO register (0x0D). D\_ logic inputs can be controlled either by the EV kit GUI or by an external source when D\_ signals are disconnected from the on-board microcontroller using the  corresponding  switch  (SW1)  channels.  The  external D\_ input signals can be applied to the D1 to D4 test points or to J13 connector.

## Digital Input Operation

The  user  can  configure  the  DOI\_  channels  as  digital inputs by selecting DI Mode in the pulldown menu in the System tab, or by setting the SetDi1 to SetDi4 bits to 1 in

## Evaluates: MAX14906

the SetOUT register (0x00). All the DOI\_ channels can be configured as either Type 1 and 3 or Type 2 digital inputs. However, it is not possible to mix input types as the inter -nal  current  sink  is  globally  set  to  either  2.3mA  (typ)  for Type 1 and 3, or 7mA (typ) for Type 2 inputs. By default, the Typ2Di bit is set to 0 , which is the Type 1 and 3 con -figuration. The DOI\_ inputs support a minimum operating range of -3V to +30V which is compliant with IEC 61131-2 digital inputs standard. Input voltage can be applied to the J12 terminal block or the DOI\_ test points.

## LED Indicators

Field supply V DD diagnostic faults are provided through the VDDOK LED.  Global  diagnostic  faults  and  perchannel diagnostic faults are provided through the FAULT LED if  the  diagnostic  features  are  enabled  through  the registers. By default, FAULT LED is turned on at power-up due to undervoltage faults set by default in the GlobalErr register.  Per-channel  output  state  and  per-channel  fault conditions are visible through the LED matrix, SLED1 to SLED4,  and  FLED1  to  FLED4,  correspondingly.  Other diagnostics  are  provided  through  the  SPI  interface  by reading diagnostic registers 0x02 through 0x07.

## Isolation Domains

The  MAX14906  EV  kit  features  galvanic  isolation  for the  4-wire  SPI,  SYNCH, FAULT, and READY signals using  the  MAX14483  and  the  D\_  logic  inputs/outputs (D1,  D2,  D3  and  D4)  using  the  MAX14937s,  whose bidirectional  channels  allow  the  D\_  signals  to  be  trans -mitted  in  both  directions  on  the  same  line.  Refer  to the MAX14906  EV  Kit  Schematic .  The  isolated  logic domain  is  powered  exclusively  from  the  USB  connector J202.  The  digital  isolators,  MAX14483  (U4)  and  the MAX14937 (U2 and U3)  keep  the  USB  ground  separate from the rest of the MAX14906 circuitry.

Protective  Earth  (PE)  is  provided  on  the  upper-left  corner  of  the  EV  kit  with  a  safety  rated  Y  capacitor  (C13) between the field ground (GND) and PE.

## External pMOS Transistors

The MAX14906 EV kit has an external pMOS transistor for  each channel to protect the MAX14906 against high reverse current flow into the DOI\_ pins in the DO modes and  supports  up  to  30V  input  voltages  in  DI  modes. When  using  the  external  pMOS  transistors,  ensure  J8, J9, J10 and J11 headers are open, and gate drive pins G1 to G4 are enabled by setting the GDrvEn\_ bits to 1 in the OpnWrEn register  (0x08). The external pMOS tran -sistors are always off and G1 to G4 pins are shorted to V DD1 to V DD4 in the DI modes and the high-impedance low-leakage mode.

## Surge and ESD Protection

The MAX14906 EV kit is immune to ±1kV surge pulses (1.2/50µs, according to IEC 61000-4-5) applied between the  DIO\_  and  field  ground.  Without  external  protection devices,  the  DOI\_  channels  of  the  MAX14906  are  pro -tected  against  negative  1kV  surges  per  IEC  61000-4-5 (42Ω/0.5µF).  To  protect  the  MAX14906  from  positive surge  transients  on  the  DOI\_  pins,  a  suppressor/TVS diode (D5) is installed between V DD  and GND. Refer to the MAX14906 EV Kit Schematic .

To  protect  the  MAX14906  from  electrostatic  discharge (ESD) events per IEC 61000-4-2, an additional 470pF can be installed on C4, C8, C9, and C10 for each DOI\_ pin. In addition, if the external pMOS transistors Q1 to Q4 are enabled (J8 to J11 open), install 1μF bypass capacitors on C18 and C19 footprint. If the external pMOS transis -tors Q1 to Q4 are not used (J8 to J11 closed), install 1μF bypass capacitors on C1, C2, C11, and C12 footprint  for each V DD\_ pin.

## Communicating with the MAX14906

The  MAX14906  EV  kit  communicates  to  a  PC  through a USB  port. The on-board FT2232 controller is communicating with all  digital  signals  including  SPI,  D1 to D4, SYNCH, READY and FAULT , and is managed by the EV kit GUI software on the PC. This is ideal for quick evaluation  and  to  explore  the  features  and  functions  of the MAX14906.

If  the  user  prefers  to  use  their  own  microcontroller  or FPGA and their own software, all digital signals including SPI, D1 to D4 signals, SYNCH, READY and FAULT are available through J13. If J13 is used, disconnect the onboard FT2232 controller from the MAX14906 by opening all switches on SW1.

## Detailed Description of Software

The MAX14906 GUI provides access to all registers and allows  full  configuration  and  control  of  the  MAX14906. There  are  two  tabs  available  to  control  the  EV  kit.  The System tab provides quick and basic control of the DOI\_ channels. The Register Settings tab provides per-channel and enhanced diagnostic configuration and allows full control of the device.

## System Tab

The System tab allows the DOI\_ pins to be configured in Digital Output mode by selecting the first pulldown menu to DO Mode . The type of digital output mode can be con -figured by selecting the second pulldown menu, including High-side mode, High-side with 2x Inrush Current mode, Active  Clamp  Push-pull  mode  and  Simple  Push-pull mode,  as  shown  in Figure  2 .  The  third  pulldown  menu allows the DOI\_ outputs to be on, off, or driving a squarewave from the pulldown menu.

The  EV  kit  drives  outputs  once On is  selected  in  the pulldown  menu.  When  driving  a  square  wave,  the  user must click the Drive Square button on the lower right-side of the GUI to drive the outputs. The indicators connected to the OUT1 to OUT4 pins show the state of each output.

Connect the oscilloscope probe to DOI\_ test points on the EV kit to see the output signal in real-time.

The  user  can  set  the  MAX14906  in  Digital  Input  mode by  selecting DI  Mode in  the  pulldown  menu  in  the  first column.  In DI  Mode ,  the  pulldown  menu  in  the  second column  allows  the  user  to  configure  all  digital  inputs  to either Type 1 and 3, or Type 2 inputs.

The  user  can  also  configure  the  MAX14906  to  be  in low-leakage high-impedance mode by selecting the LowLeakage Mode , in the pulldown menu in the first column.

## Register Settings Tab

The Register Settings tab allows full configuration of the device, as shown in Figure 3 . The full register map of the MAX14906 is located on the left-side of the tab, and the bit-by-bit  control  and  description  table  is  located  on  the right  side.  When  the  register  is  selected  in  the  register table, the detailed description of each bit is shown in the bit description table. The bit value can be changed using pulldown menus in the Setting cell for each bit individually in the bit description table. Both tables are synchro -nized in that changes made in one table appear at both tables. There are several write and read options available through the corresponding control buttons located below the bit description table.

When the Auto Write button is selected, any data typed in,  or  selected  through  the Setting pulldown  menu  is automatically  written  into  the  corresponding  writable register.  The  button  renamed  to Stop  Auto  Write and auto  write  function  can  be  canceled  by  clicking  on  this button a second time.

The Read All button performs a read operation of all registers after each click.

When the fault conditions occur, they set the bit(s) in the corresponding read-only registers 0x02 to 0x07. The fault conditions  should  be  carefully  evaluated  and  removed externally  (over-/undervoltage,  thermal  overload,  openwire, etc.). It is recommended to read the Interrupt (0x03) and GlobalErr (0x07) registers first to identify what kind of  fault  conditions  are  present,  then  read  per-channel diagnostic  registers  0x02,  0x04  to  0x06  twice  to  make sure that the condition is gone and to clear the interrupts.

## MAX14906 Evaluation Kit

The Write Selected button allows to write to the selected register only, while the Write Modified button performs a write operation to all modified registers after each click.

The Burst Write allows the GUI to write to registers 0x00 and 0x01 only in  one  SPI  cycle,  while  the Burst  Read allows the GUI to read multiple consecutive registers 0x02 through 0x07 (DoiLevel, Interrupt, OvrLdChF, OpnWirChF, ShtVDDChF, and GlobalErr registers) in one SPI cycle.

There  are  a MAX14906  I/O  Pins box  and  a SDO Diagnostic  Result box  below  the  buttons.  The  SDO diagnostic faults are updated after each SPI read or write operation. To enable or disable the CRC function on the SPI interface, both software and hardware configurations

## Evaluates: MAX14906

need to be matched. To enable the CRC, set the jumper J1 in the 1-2 position and put the CRCEN slider  to  the enabled position. To disable the CRC, set jumper J1 in the 2-3 position and set the CRCEN slider to disabled. The SYNCH slider allows manual synchronization of multiple devices.

The  user  must  match A0  and A1  jumper  position  (2-3 position  by  default)  on  the  EV  kit  with  the  SPI  address selected from the Address pulldown menu, located below the register map table. The default address is 00.

Each  SPI  transaction  is  displayed  in  the Device  Mode Info box for user convenience.

Figure 1. MAX14906 EV Kit GUI System Tab

<!-- image -->

Figure 2. System Tab/Output Configuration

<!-- image -->

Figure 3. Register Settings Tab

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14906EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX14906

## MAX14906 EV Kit Bill of Materials

|   ITEM | REF_DES                         | DNI/DNP   |   QTY | MFG PART #                                                                                           | MANUFACTURER                                   | VALUE             | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|---------------------------------|-----------|-------|------------------------------------------------------------------------------------------------------|------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C3, C17                         | -         |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01;HMK107B7104KA; 06031C104KAT2A;GRM188R72A104K | YAGEO;MURATA;MURATA; TAIYO YUDEN;AVX;MURATA    | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
|      2 | C5                              | -         |     1 | C3225X7S1H106K250AB; CGA6P3X7S1H106K250AB; GCM32EC71H106K                                            | TDK;TDK;MURATA                                 | 10UF              | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                               |            |
|      3 | C6                              | -         |     1 | C2012X7S2A105K125AB; GRJ21BC72A105KE11; CGA4J3X7S2A105K125AB; GRM21BC72A105KE01                      | TDK;MURATA;TDK                                 | 1UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                               |            |
|      4 | C7                              | -         |     1 | GMK212B7105KG; GRM219R7YA105KA12                                                                     | TAIYO YUDEN;MURATA                             | 1.0UF             | CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                   |            |
|      5 | C13                             | -         |     1 | GA352QR7GF102KW01                                                                                    | MURATA                                         | 1000PF            | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC CHIP                                                                   |            |
|      6 | C14, C15, C205-C215, C230, C231 | -         |    15 | C0402C104J4RAC; GCM155R71C104JA55                                                                    | KEMET;MURATA                                   | 0.1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |            |
|      7 | C201                            | -         |     1 | C1005X7R1V103K050BB                                                                                  | TDK                                            | 0.01UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
|      8 | C202, C203                      | -         |     2 | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                               | KEMET;MURATA;TDK                               | 18PF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                |            |
|      9 | C204                            | -         |     1 | C0603C475K8PAC; LMK107BJ475KA;CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN                   | KEMET;TAIYO YUDEN;TDK; TDK;SAMSUNG ELECTRONICS | 4.7UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |            |
|     10 | CP1                             | -         |     1 | CL21A106KOQNNN; GRM21BR61C106KE15; EMK212ABJ106KD                                                    | SAMSUNG ELECTRONICS; MURATA;TAIYO YUDEN        | 10UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |            |
|     11 | CP2                             | -         |     1 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                                | TAIYO YUDEN;TDK; SAMSUNG;MURATA                | 1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                       |            |
|     12 | CP3                             | -         |     1 | C0603C102K5RAC; GRM188R71H102KA01; C0603X7R500-102KNE                                                | KEMET;MURATA;VENKEL                            | 1000PF            | CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; - 55degC to + 125degC; +/-15% from - 55degC to +125degC           |            |
|     13 | CP4                             | -         |     1 | C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN                                     | KEMET;MURATA;TAIYO YUDEN;SAMSUNG EL            | 22UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X5R                              |            |
|     14 | CP5, CP6                        | -         |     2 | GRM21BR71C475KA73; 0805YC475KAT2A; GCM21BR71C475KA73; CGA4J3X7R1C475K125AE                           | MURATA;AVX;MURATA:TDK                          | 4.7UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R            |            |
|     15 | D5                              | -         |     1 | SMBJ36A-E3                                                                                           | VISHAY GENERAL SEMICONDUCTOR                   | 36V               | DIODE; TVS; SMB (DO-214AA); VRM=36V; IPP=10.3A                                                                          |            |
|     16 | DOI1-DOI4                       | -         |     4 | 5125                                                                                                 | KEYSTONE                                       | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     17 | EARTH                           | -         |     1 | 5126                                                                                                 | KEYSTONE                                       | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     18 | FAULT, FLED1-FLED4              | -         |     5 | LS L29K-G1J2-1-Z                                                                                     | OSRAM                                          | LS L29K-G1J2-1-Z  | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                           |            |
|     19 | FB1                             | -         |     1 | BLM21AG601SN1                                                                                        | MURATA                                         |                   | 600 INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                           |            |
|     20 | FB2, FB3                        | -         |     2 | BLM21PG331SN1                                                                                        | MURATA                                         |                   | 330 INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A                                                           |            |
|     21 | GND, VDD                        | -         |     2 |                                                                                                      | 3267 POMONA ELECTRONICS                        |                   | 3267 CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                      |            |
|     22 | J1, J3, J4, J6                  | -         |     4 | PCC03SAAN                                                                                            | SULLINS                                        | PCC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |            |
|     23 | J2, J5, J7-J11                  | -         |     7 | PCC02SAAN                                                                                            | SULLINS                                        | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                |            |
|     24 | J12                             | -         |     1 | 250-408                                                                                              | WAGO                                           | 250-408           | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8PINS                               |            |
|     25 | J13                             | -         |     1 | 68021-220HLF                                                                                         | AMPHENOL ICC                                   | 68021-220HLF      | CONNECTOR; MALE; THROUGH HOLE; BERGSTIK II BREAKAWAY HEADER; RIGHT ANGLE; 20PINS                                        |            |
|     26 | J202                            | -         |     1 | ZX62RD-AB-5P8(30)                                                                                    | HIROSE ELECTRIC CO LTD.                        | ZX62RD-AB-5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS         |            |

## MAX14906 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                         | DNI/DNP   |   QTY | MFG PART #                                                                      | MANUFACTURER                 | VALUE            | DESCRIPTION                                                                                                                                 | COMMENTS                 |
|--------|-----------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------|------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| 27     | LED201                                                          | -         |     1 | SML-P12PT                                                                       | ROHM                         | SML-P12PT        | DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; GREEN; SMT (0402); VF=2.2V; IF=0.02A                                          |                          |
| 28     | LP1                                                             | -         |     1 | B82432T1332K000                                                                 | TDK                          | 3.3UH            | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/-10%; 0.9A                                                                                 |                          |
| 29     | Q1-Q4                                                           | -         |     4 | NTTFS5116PLTAG                                                                  | ON SEMICONDUCTOR             | NTTFS5116PL      | TRAN; POWER MOSFET; PCH; WDFN8; PD-(40W); I-(-20A); V-(-60V)                                                                                |                          |
| 30     | R1                                                              | -         |     1 | CRCW060324K9FK;ERJ-3EKF2492                                                     | VISHAY DALE;PANASONIC        | 24.9K            | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |                          |
| 31     | R2                                                              | -         |     1 | CRCW060310K0JN;ERJ-3GEYJ103                                                     | VISHAY DALE;PANASONIC        | 10K              | RESISTOR; 0603; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                      |                          |
| 32     | R3, R17                                                         | -         |     2 | CRCW06031K00FK;ERJ-3EKF1001                                                     | VISHAY DALE;PANASONIC        | 1K               | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                           |                          |
| 33     | R4, R7-R11, R25                                                 | -         |     7 | CRCW060320R0FK;ERJ-3EKF20R0                                                     | VISHAY DALE;PANASONIC        |                  | 20 RESISTOR, 0603, 20 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                    |                          |
| 34     | R6, R13, R15, R19-R24                                           | -         |     9 | CRCW020110K0FK                                                                  | VISHAY DALE                  | 10K              | RESISTOR; 0201; 10K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                                                      |                          |
| 35     | R12, R14, R18, R26                                              | -         |     4 | CRCW06035K60FK                                                                  | VISHAY DALE                  | 5.6K             | RESISTOR, 0603, 5.6K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                     |                          |
| 36     | R27                                                             | -         |     1 | CRCW0402100KFK;RC0402FR-07100KL                                                 | VISHAY;YAGEO                 | 100K             | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                       |                          |
| 37     | R201                                                            | -         |     1 | ERJ-2RKF1301                                                                    | PANASONIC                    | 1.3K             | RESISTOR; 0402; 1.3K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                     |                          |
| 38     | R202, R203                                                      | -         |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                    | VISHAY DALE;ROHM             |                  | 10 RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |                          |
| 39     | R204                                                            | -         |     1 | CRCW060310K0FK;ERJ-3EKF1002                                                     | VISHAY DALE;PANASONIC        | 10K              | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                          |                          |
| 40     | R205                                                            | -         |     1 | CRCW060315K0FK                                                                  | VISHAY DALE                  | 15K              | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                                       |                          |
| 41     | R206                                                            | -         |     1 | CRCW060312K0FK                                                                  | VISHAY DALE                  | 12K              | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                      |                          |
| 42     | R207                                                            | -         |     1 | CRCW040210K0FK;RC0402FR-0710KL                                                  | VISHAY DALE;YAGEO PHICOMP    | 10K              | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                        |                          |
| 43     | R208                                                            | -         |     1 | CRCW04022K20FK;RC0402FR-072K2L                                                  | VISHAY DALE;YAGEO PHICOMP    | 2.2K             | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                   |                          |
| 44     | RP1                                                             | -         |     1 | CRCW0603100RFK;ERJ-3EKF1000; RC0603FR-07100RL                                   | VISHAY DALE;PANASONIC        |                  | 100 RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                  |                          |
| 45     | SLED1-SLED4                                                     | -         |     4 | LGL29K-G2J1-24-Z                                                                | OSRAM                        | LGL29K-G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                                        |                          |
| 46     | SPACER1-SPACER4                                                 | -         |     4 | 9032                                                                            | KEYSTONE                     |                  | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                              |                          |
| 47     | SU1-SU11                                                        | -         |    11 | S1100-B;SX1100-B;STC02SYAN                                                      | KYCON;KYCON;SULLINS ELECTRON | SX1100-B         | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                     |                          |
| 48     | SW1                                                             | -         |     1 | 219-12MST                                                                       | CTS                          | 219-12MST        | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000MOHM                                       |                          |
| 49     | TP1, TP2, TP4, TP11                                             | -         |     4 |                                                                                 | 5011 KEYSTONE                | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                     | GND                      |
| 50     | A0, A1, CLK, CRCEN, CS, D1-D4, EN, MISO, MOSI, SYNCH, TP3, TP15 | -         |    15 |                                                                                 | 5009 KEYSTONE                | N/A              | TESTPOINT;PINDIA=0.125IN; TOTALLENGTH=0.35IN;BOARDHOLE =0.063IN;YELLOW;PHOSPHORBRON ZEWIRESILVERPLATEFINISH; EVKIT PART - IC; MAX14906ATM+; | (TP3:FAULT) (TP15:READY) |
| 51     | U1                                                              | -         |     1 | MAX14906ATM+                                                                    | MAXIM                        | MAX14906ATM+     | TQFN48-EP; PAKCAGE CODE: T4866+6C; PACKAGE OUTLINE: 21- 0144; PACKAGE LAND PATTERN: 90- 0130                                                |                          |
| 52     | U2, U3                                                          | -         |     2 | MAX14937AWE+                                                                    | MAXIM                        | MAX14937AWE+     | IC; ISO; TWO CHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16                                                                                          |                          |
| 53     | U4                                                              | -         |     1 | MAX14483AAP+                                                                    | MAXIM                        | MAX14483AAP+     | IC; DISO; 6-CHANNEL; LOW-POWER; 3.75KVRMS SPI DIGITAL ISOLATOR; SSOP20                                                                      |                          |
| 54     | U201                                                            | -         |     1 | FT2232HQ                                                                        | FUTURE TECHNOLOGY DEVICES    | INTFT2232HQ      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                                           |                          |
| 55     | U202                                                            | -         |     1 | 93LC66BT-I/OT                                                                   | MICROCHIP MAXIM              | 93LC66BT-I/OT    | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                              |                          |
| 56     | U203                                                            | - -       |     1 | MAX1556ETB+                                                                     |                              | MAX1556ETB+      | IC; CONV; PWMSTEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                                       |                          |
| 57     | V5, VDD_TP, VL, VLED                                            |           |     4 |                                                                                 | 5010 KEYSTONE                | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                       |                          |
| 58     | VDDOK                                                           | -         |     1 | LTST-C171GKT                                                                    | LITE-ON ELECTRONICS INC.     | LTST-C171GKT     | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=5.0V; IF=0.12A; -55 DEGC TO +85 DEGC                                                           |                          |
| 59     | Y1                                                              | -         |     1 |                                                                                 |                              |                  |                                                                                                                                             |                          |
|        |                                                                 |           |       | ABM7-12.000MHZ-D2Y-T                                                            | ABRACON                      | 12MHZ            | CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM                                                                                              |                          |
| 60 61  | PCB                                                             | -         |     1 | MAX14906                                                                        | MAXIM                        | PCB              | PCB:MAX14906                                                                                                                                | -                        |
|        | C1, C2, C11, C12, C18, C19                                      | DNP       |     0 | C2012X7S2A105K125AB; GRJ21BC72A105KE11; CGA4J3X7S2A105K125AB; GRM21BC72A105KE01 | TDK;MURATA;TDK               | 1UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                   |                          |
| 62     | C4, C8-C10                                                      | DNP       |     0 | C0603C471K1GAC                                                                  | KEMET                        | 470PF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 470PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+                                        |                          |

## MAX14906 EV Kit Schematic

<!-- image -->

## MAX14906 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX14906

## MAX14906 EV Kit PCB Layout Diagrams

MAX14906 EV Kit-Top Silkscreen

<!-- image -->

MAX14906 EV Kit-Layer 2 GND

<!-- image -->

## Evaluates: MAX14906

MAX14906 EV Kit-Top Layer

<!-- image -->

MAX14906 EV Kit-Layer 3 Power

<!-- image -->

## MAX14906  EV Kit PCB Layout Diagrams (continued)

MAX14906 EV Kit-Bottom Layer

<!-- image -->

MAX14906 EV Kit-Bottom Silkscreen

<!-- image -->

## MAX14906 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/20            | Initial release                                                                                                              | -               |
|                 1 | 3/21            | Updated the External Power Supplies, LED Indicators, Surge and ESD Protection and Registers Setting Tab sections, andTable 1 | 4-7             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX14906