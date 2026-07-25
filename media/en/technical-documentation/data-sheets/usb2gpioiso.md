<!-- lastmod 2022-08-02 -->
## USB2GPIOISO# Adapter Board

## General Description

The USB2GPIOISO# adapter board, shown in Figure 1, is  designed  to  work  with  Maxim's  USB2GPIO#  adapter board  to  provide  galvanic  isolation  between  the  'master' USB adapter board and a 'slave' EV kit or Pmod™ board. Four  MAX14483  6-channel  digital  isolators  are  used  to provide 3.75kV RMS  isolation.

USB2GPIOISO# block diagram is shown in Figure 2. The two power domains are on the 'master' side (VDD\_M and GNDM), and the 'slave' side (VDD\_S and GNDS). The two independent power supplies are provided from the master board  and  the  slave  board  with  each  VDD\_  between 1.71V and 5.5V. The two connectors on the 'master' side are male connectors and plug into the female connectors on the USB2GPIO# adapter, as shown in Figure 3.

USB2GPIOISO#  is  also  designed  to  work  with  legacy USB2PMB1#  and  USM2PMB2#  adapters;  connectors XMA and XSA are 12-pin connectors which support either SPI  with  4  GPIO  pins  and  are  fully  compatible  with previous  adapters  and  low-pin  count  EV  kit  or  Pmod boards. These connectors are controlled from the Munich GUI or  relevant  EV  kit  GUIs.  Note  that  the  isolator  ICs have unidirectional channels (in or out). Full bidirectional I 2 C communication is not supported by this board.

The other connectors, XMB and XSB, are 20-pin connectors supporting extra GPIO  connections. These 20-pin connectors are NOT controlled by the Munich GUI but are for  use  with  future  EV  kits  and  will  be  controlled  by  the relevant EV kit GUIs.

USB2GPIOISO#  adapter  board  can  be  used  to  enable isolated USB-to-SPI/GPIO  interface for  any  Pmodcompatible plug-in peripheral modules such as the Maxim MAX14001PMB, and MAXREFDES12-Corona reference design.

Pmod™ is a trademark of Digilent, Inc.

## Features

- 24 Isolated Channels with 3.75kV RMS  Robust Galvanic Isolation
- Low Propagation Delay 10ns, Typical
- Flexible System Design with Wide 1.71V to 5.5V Voltage Range on Each Side
- Small PCB area
- Pmod-Compatible Form Factor

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. USB2GPIOISO# Board

<!-- image -->

## USB2GPIOISO# Adapter Board

## Detailed Description of Hardware

Figure  2  shows  the  USB2GPIOISO#  connector  block diagram  (taken  from  the  schematic).  Note  that  the 'arrow'  on  each  connector  indicates  the  flow  of  data. For  example,  pin  1  on  XMA  shows  that  the  signal (CS\_AM)  comes  from  the  master,  passes  through  the male connector, and onto USB2GPIOISO# board to the isolator  channel  for  CS.  Then,  on  the  slave  side  of  the isolator, this signal routes to pin 1 on XSA connector (CS\_ AS) and the 'arrow' shows the direction is from the isolator, through the female connector and to the slave board.

The two power domains are on the 'master' side (VDD\_M and  GNDM),  and  the  'slave'  side  (VDD\_S  and  GNDS). The two independent power supplies are provided from the  master  board  and  the  slave  board  with  each  VDD\_ between  1.71V  and  5.5V.  The  two  connectors  on  the 'master'  side  are  male  connectors  and  plug  into  the female connectors on the USB2GPIO# adapter, as shown in Figure 3.

MAX14483 has unidirectional data channels and USB2GPIOISO#  is  configured  in  a  14/10  mode  rather than a bidirectional I/O mode, meaning there are 14 channels communicating  from  the  master  to  the  slave,  and  10 channels  communicating  from  the  slave  to  the  master. Refer to  the  USB2GPIOISO# Adapter Board Schematic for  each  channel's  communication  direction.  The  digital  channels  on  the  slave  Pmods  or  EV  kits  should follow  the  same  communication  directions  as  on  the USB2GPIOISO# board. The Munich GUI and the EV kit GUI automatically configure the channel directions based on this and no jumpers are required for configuration.

## Evaluates: USB2GPIOISO

Figure 2. USB2GPIOISO# Subsystem Block Diagram

<!-- image -->

Figure 3. USB2GPIOISO# Board Connected with USB2GPIO# Adapter

<!-- image -->

│

## USB2GPIOISO# Adapter Board

## Master and Slave Connectors

The  USB2GPIOISO#  is  designed  to  receive  power (VDD\_M,  GNDM  and  VDD\_S,  GNDS)  from  external boards through the connectors XMA, XMB, XSA and XSB. VDD\_S is defined by the type of board connected to the slave connectors. When the user selects certain tab in the Munich GUI, VDD\_M is automatically set to certain level, either 1.8V, 2.5V, 3.3V, or 5.0V. Note that USB2GPIOISO# does NOT provide power using VDD\_S to the Pmod or EV kit board, but instead expects to receive power from those boards. Test points VDD\_S and GND are provided to allow powering the USB2GPIOISO# slave side and Pmod or EV kit boards with external power supply.

## Evaluates: USB2GPIOISO

Figure 4 shows the top view of the USB2GPIOISO# board, with the different connectors and the pin 1 identifiers. Note there are no jumpers or shunts on this board, all configuration is  done  under  software  control.  Care  should  be  taken  to only insert the boards in the correct way as the connectors are  not  keyed  to  avoid  false  insertions.  Reversing  the connections (by turning the Pmod board upside down for example)  may  result  in  damage  to  the  USB2GPIOISO# Pmod or EV kit board. Two LEDs are included to indicate if VDD\_M and VDD\_S are powered.

Figure 4. USB2GPIOISO# Orientation and Pinouts

<!-- image -->

## Ordering Information

# Denotes RoHS compliant

| PART         | TYPE          |
|--------------|---------------|
| USB2GPIOISO# | Adapter Board |

│

## USB2GPIOISO# Adapter Board

## USB2GPIOISO# Adapter Board Bill of Materials

| DESCRIPTION CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM FILM RESISTOR, 0603, 470 OHM, 1%, 100PPM, 0.10W, THICK FILM POWER; 3.75KVRMS; SPI DIGITAL ISOLATOR; DIODE; LED; SML-P1 SERIES; PICOLED; BLUE; SMT (0402); VF=2.9V; IF=0.005A BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE BREAKAWAY HEADER; RIGHT ANGLE; 12PINS; BERGSTIK II BREAKAWAY HEADER; RIGHT ANGLE; CONNECTOR; FEMALE; THROUGH HOLE; 0.1IN CC; HEADER; 2 ROW; RIGHT ANGLE; 12PINS CONNECTOR; FEMALE; THROUGH HOLE; BREAKAWAY HEADER; RIGHT ANGLE; 20PINS PCB:USB2GPIO_ISO_APPS_B   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VALUE 10UF 0.1UF N/A 10K 1K 470 + SMLP12BC7T N/A 68021-212HLF ICC 68021-220HLF PPPC062LJBN- RC PPTC102LJBN- RC PCB                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| MANUFACTURER SAMSUNG ELECTRONICS MURATA; TDK 5001 KEYSTONE VISHAY DALE; YAGEO PHICOMP VISHAY DALE VISHAY DALE/PANASONIC MAXIM ROHM 5000 KEYSTONE FCI CONNECT AMPHENOL ELECTRONICS CORP. ELECTRONICS CORP MAXIM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MFG PART # CL21B106KOQNNN GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA 4 CRCW040210K0FK; RC0402FR-0710K 1 TNPW04021K00BE 2 CRCW0603470RFK; ERJ-3EKF4700 4 MAX14483AAP+ 2 SMLP12BC7T 1 1 68021-212HLF 1 68021-220HLF 1 PPPC062LJBN-RC 1 PPTC102LJBN-RC 1 USB2GPIO_ISO_APPS_B 36 ; DNP--> DO NOT PROCURE                                                                                                                                                                                                                                                                                                                                                                                                                          |
| QTY 8 8 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| REF_DES DNI/ DNP C1, C3, C5, C7, C10, C12, C14, C16 - C2, C4, C6, C8, C9, C11, C13, C15 - GND - R1-R4 - R5 - RP1, RP2 - U1-U4 - VDD_FIELD, VDD_LOGIC - VDD_S - XMA - XMB - XSA - XSB - PCB -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ITEM 1 2 3 4 5 6 7 8 9 10 11 12 13 14 TOTAL NOTE: DNI--> DO NOT INSTALL(PACKOUT)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## USB2GPIOISO# Adapter Board Schematic

<!-- image -->

│

## USB2GPIOISO# Adapter Board PCB Layout Diagrams

<!-- image -->

USB2GPIOISO# Adapter Board-Top Silkscreen

<!-- image -->

USB2GPIOISO# Adapter Board-Internal 2

USB2GPIOISO# Adapter Board-Top

<!-- image -->

USB2GPIOISO# Adapter Board-Internal 3

<!-- image -->

│

## USB2GPIOISO# Adapter Board PCB Layout Diagrams (continued)

USB2GPIOISO# Adapter Board-Bottom Silkscreen

<!-- image -->

USB2GPIOISO# Adapter Board-Bottom

<!-- image -->

│

## USB2GPIOISO# Adapter Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 04/18           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: USB2GPIOISO