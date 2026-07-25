<!-- lastmod 2022-08-02 -->
## MAX14611 Evaluation Kit

## General Description

The MAX14611 evaluation kit (EV kit) is  a  fully  assembled  and  tested  circuit  board  that  demonstrates  the functionality  of  the  MAX14611  quad  bidirectional  lowvoltage logic-level translator in a 14-pin TDFN package. The  highly  configurable  PCB  enables  direct  evaluation of  the  IC  through  multiple  jumper-selectable  methods. Input  power  to  the  EV  kit  is  provided  by  a  Micro-USB, type-B  connector,  or  by  an  external  5V  power  supply. On-board LDO regulators provide the appropriate voltage for each component, and potentiometers allow the user to independently adjust the power supply for either side of the level translator.

## Quick Start

## Required Equipment

- MAX14611	EV	kit
- Digital	voltmeter	(DVM)
- USB power source or another 5V external power supply
- Oscilloscope	and	at	least	one	scope	probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation and begin evaluation:

- 1)  If  using  a  USB  bus  to  power  the  board,  connect  the included  Micro-USB  cable  between  the  Micro-USB, type-B  connector  (J1)  and  the  USB  power  source, such as a computer or dedicated USB charging port, and install a shunt on jumper JP22 shorting pins 1-2.
- 2)  If using an external power source to power the board, connect  the  external  power  supply  at  the  VEXT shorting pins 2-3.

Evaluates: MAX14611

## Features and Benefits

- Proven PCB Layout
- Decrease Evaluation Time
- Fully Assembled and Tested
- On-Board Adjustable Oscillators · Evaluate without External Function Generator
- Jumper-Selectable Open-Drain and Push-Pull Buffers Enable Simple Evaluation in Either Operating Mode
- 3)  Connect  the  DVM  between  GND  (TP1)  and  VCC (TP27).  Adjust  the  1st  potentiometer  (POT1)  until the desired voltage for VCC appears on the DVM by turning the screw on the potentiometer to the right or to the left.
- 4)  Connect the DVM between GND (TP1) and VL (TP28). Adjust the 2nd potentiometer (POT2) until the desired voltage  for  VL  appears  on  the  DVM  by  turning  the screw on the potentiometer to the right or to the left. Note that VL should be lower than VCC.
- 5)  Connect  the  jumpers  in  the  desired  configuration based on the descriptions listed in Table 1.
- 6)  After implementing the desired configuration, connect the oscilloscope probe to the output evaluated to observe the translated voltage of the input signal.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX14611 Evaluation Kit

Table 1. Jumper Configurations (JP3 -JP15, JP17, JP19 -JP22)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                 |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP3      | 1-2              | Connects 1kΩ pullup resistor between VL and I/OVL2                                                                                                                                          |
| JP3      | Not installed    | Disconnects 1kΩ pullup resistor between VL and I/OVL2                                                                                                                                       |
| JP4      | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVL1. The open-drain buffer is driven by the output of DS1090-16 (U5). Adjust the frequency of the signal using POT3.        |
| JP4      | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVL1                                                                                                          |
| JP4      | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVL1. The push-pull buffer is driven by the output of DS1090-1 (U4). Adjust the frequency of the signal using POT4.           |
| JP5      | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVL3                                                                                                                                         |
| JP5      | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVL3                                                                                                                                      |
| JP6      | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVL2. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP6      | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVL2.                                                                                                         |
| JP6      | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVL2. The push-pull buffer is driven by the output of DS1090-1 (U4). The frequency of the signal is adjustable using POT4.    |
| JP7      | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVCC4                                                                                                                                        |
| JP7      | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVCC4                                                                                                                                     |
| JP8      | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVL4                                                                                                                                         |
| JP8      | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVL4                                                                                                                                      |
| JP9      | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVL3. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP9      | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVL3                                                                                                          |
| JP9      | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVL3. The push-pull buffer is driven by the output of DS1090-1 (U4 The frequency of the signal is adjustable using POT4.      |
| JP10     | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVCC3                                                                                                                                        |
| JP10     | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVCC3                                                                                                                                     |
| JP11     | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVL1                                                                                                                                         |
| JP11     | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVL1                                                                                                                                      |
| JP12     | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVCC1                                                                                                                                        |
| JP12     | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVCC1                                                                                                                                     |
| JP13     | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVL4. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP13     | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVL4                                                                                                          |
| JP13     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVL4. The push-pull buffer is driven by the output of DS1090-1 (U4). The frequency of the signal is adjustable using POT4.    |
| JP14     | 1-2              | Connects 1kΩ pullup resistor between VCC and I/OVCC2                                                                                                                                        |
| JP14     | Not installed    | Disconnects 1kΩ pullup resistor between VCC and I/OVCC2                                                                                                                                     |

│

Evaluates: MAX14611

Evaluates: MAX14611

Table 1. Jumper Configurations (JP3 -JP15, JP17, JP19 -JP22) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                  |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP15     | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVCC1. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP15     | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVCC1                                                                                                          |
| JP15     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVCC1. The push-pull buffer is driven by the output of DS1090-1 (U4). The frequency of the signal is adjustable using POT4.    |
| JP17     | 1-2              | Connects the TS pin of U1 to VL placing the device's I/O pins in normal operating mode.                                                                                                      |
| JP17     | 2-3              | Connects the TS pin of U1 to GND placing the device's I/O pins in high-impedance three-state mode.                                                                                           |
| JP19     | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVCC2. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP19     | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVCC2                                                                                                          |
| JP19     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVCC2. The push-pull buffer is driven by the output of DS1090-1 (U4). The frequency of the signal is adjustable using POT4.    |
| JP20     | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVCC3. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP20     | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVCC3                                                                                                          |
| JP20     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVCC3. The push-pull buffer is driven by the output of DS1090-1 (U4). The frequency of the signal is adjustable using POT4.    |
| JP21     | 1-2              | Connects open-drain buffer to driving signal bus for channel I/OVCC4. The open-drain buffer is driven by the output of DS1090-16 (U5). The frequency of the signal is adjustable using POT3. |
| JP21     | 1-3              | Connects external source connected at TP5 to driving signal bus for channel I/OVCC4                                                                                                          |
| JP21     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVCC4. The push-pull buffer is driven by the output of DS1090-1 (U4). The frequency of the signal is adjustable using POT4.    |
| JP22     | 1-2              | Power to board supplied at Micro-USB connector (J1)                                                                                                                                          |
| JP22     | 2-3              | Power to board supplied at external VEXT test point (TP2)                                                                                                                                    |

Note: The following pairs are mutually exclusive; do not install a shunt on both the jumpers in the following pairs at the same time: JP4 and JP15, JP6 and JP19, JP9 and JP20, and JP13 and JP21.

## Detailed Description of Hardware

The  MAX14611  EV  kit  is  a  fully  assembled  and  tested  circuit  board  that  demonstrates  the  functionality  of the  MAX14611  quad  bidirectional  low-voltage  logiclevel  translator  in  a  14-pin  TDFN  package.  The  highly configurable  PCB  enables  direct  evaluation  of  the  IC through multiple jumper-selectable methods. Input power to  the  EV  kit  is  provided  by  a  Micro-USB,  type-B connector, or by an external 5V power supply. On-board LDO regulators provide the appropriate voltage for each component,  and  potentiometers  allow  the  user  to  independently adjust the power supply for either side of the level  translator.  The  EV  kit's  PCB  is  designed  with  1oz copper.

## Power Supply

The EV kit is powered by a user-supplied 5V external DC power  supply  connected  between  the  VEXT  test  point (TP2) and GND, or the USB bus provided at the MicroUSB connector (J1). The power supply is then converted into three independent voltages. The pin-selectable output  voltage  of  the  MAX8902A  (U12)  provides  a  4.6V supply for peripherals such as the NC7WZ07 open-drain buffer,  as  well  as  the  DS1090  oscillators. Two  separate MAX8902B ICs are used to generate the power for the

## Component List

| DESIGNATION                          |   QTY | DESCRIPTION                                      |
|--------------------------------------|-------|--------------------------------------------------|
| C1, C3, C4, C6, C7, C9               |     6 | 10µF ±10%, 6.3V X5R ceramic capacitors (0805)    |
| C2, C5, C8                           |     3 | 0.01µF ±10%, 16V X7R ceramic capacitors (0603)   |
| C10-C21                              |    12 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603)    |
| D1                                   |     1 | Red LED (0805) Stanley Electric BR1112H-TR       |
| J1                                   |     1 | Micro-USB, type-B receptacle Hirose ZX62D-B-5PA8 |
| JP3, JP5, JP7, JP8, JP10-JP12, JP14  |     8 | 2-pin, single-row headers                        |
| JP4, JP6, JP9, JP13, JP15, JP19-JP21 |     8 | 4-pin headers                                    |
| JP17, JP22                           |     2 | 3-pin, single-row headers                        |

## Evaluates: MAX14611

VCC and VL supplies on the U1 IC. The VCC supply is generated by U2, which also provides power to the pushpull  buffers  for  the  VCC  channels  (U10,  U13).  The  VL supply is generated by U3, which also provides power to the push-pull buffers for the VL channels (U6, U8).

## On-Board Oscillators

The  EV  kit  features  two  on-board  oscillators  to  generate  input  signals  to  the  device.  The  DS1090-1  (U4)  is used to  generate  a  potentiometer-adjustable  clock  from 4MHz to 8MHz, while the DS1090-16 (U5) generates a potentiometer-adjustable  clock  from  250kHz  to  500kHz. These  clock  signals  can  be  connected  to  individual channels  using  4-way  jumpers  JP4,  JP6,  JP9,  JP13, JP15, and JP19-JP21 (see Table 1).

## Push-Pull and Open-Drain Evaluation

Each channel can be driven in either push-pull or opendrain mode. For evaluation of push-pull operation or lowspeed open-drain operation, use the on-board oscillators. Simply connect the open-drain buffer or push-pull buffer through one of the 4-way jumpers to the channel to be driven to begin evaluation (see Table 1 for jumper configurations). For high-speed open-drain operation, an external function generator is required.

| DESIGNATION     |   QTY | DESCRIPTION                                            |
|-----------------|-------|--------------------------------------------------------|
| POT1, POT2      |     2 | 500kΩ ±10%, 0.25W potentiometers Murata PV37W504C01B00 |
| POT3, POT4      |     2 | 50kΩ ±10%, 0.25W potentiometers Murata PV37W503C01B00  |
| R1              |     1 | 1.5kΩ ±1% resistor (0805)                              |
| R2              |     1 | 120kΩ ±1% resistor (0805)                              |
| R3              |     1 | 80.6kΩ ±1% resistor (0805)                             |
| R4              |     1 | 470Ω ±5% resistor (0805)                               |
| R5              |     1 | 68kΩ ±1% resistor (0805)                               |
| R6, R7          |     2 | 43kΩ ±5% resistors (0805)                              |
| R8-R11, R14-R17 |     8 | 1kΩ ±1% resistors (0805)                               |
| R12, R13        |     2 | 100kΩ ±5% resistors (0805)                             |
| TP1, TP22-TP25  |     5 | Black test points                                      |

│

## MAX14611 Evaluation Kit

## Component List (continued)

| DESIGNATION                     |   QTY | DESCRIPTION                                                                                      |
|---------------------------------|-------|--------------------------------------------------------------------------------------------------|
| TP2, TP26-TP28                  |     4 | Red test points                                                                                  |
| TP5-TP9, TP14, TP15, TP19, TP21 |     9 | White test points                                                                                |
| TP10-TP13, TP16-TP18, TP20      |     8 | Yellow test points                                                                               |
| U1                              |     1 | Quad bidirectional low-voltage logic-level translator (14 TDFN-EP*) Maxim MAX14611ETD+           |
| U2, U3                          |     2 | Low-noise LDO regulators with resistor-selectable output voltage (8 TDFN-EP*) Maxim MAX8902BATA+ |
| U4                              |     1 | Low-frequency, spread- spectrum EconOscillator™ (8 µSOP) Maxim DS1090U-1+                        |

## Component Suppliers

| SUPPLIER                   | PHONE        | WEBSITE                    |
|----------------------------|--------------|----------------------------|
| Hirose Electric Co., Ltd.  | -            | www.hirose-connectors.com  |
| Murata Americas            | 800-241-6574 | www.murataamericas.com     |
| Stanley Electric Co., Ltd. | -            | www.stanley-components.com |

Note: Indicate that you are using the MAX14611 when contacting these component suppliers.

EconOscillator is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX14611

* EP = Exposed pad.

| DESIGNATION      |   QTY | DESCRIPTION                                                                                |
|------------------|-------|--------------------------------------------------------------------------------------------|
| U5               |     1 | Low-frequency, spread- spectrum EconOscillator (8 µSOP) Maxim DS1090U-16+                  |
| U6, U8, U10, U13 |     4 | Tiny Logic ultra-high-speed dual inverters Fairchild NC7WZ04P6X                            |
| U7, U9, U11, U14 |     4 | Tiny Logic ultra-high-speed dual buffers Fairchild NC7WZ07P6X                              |
| U12              |     1 | Low-noise LDO regulator with pin-selectable output voltage (8 TDFN-EP*) Maxim MAX8902AATA+ |
| -                |    14 | Shunts                                                                                     |
| -                |     1 | PCB: MAX14611 EVKIT                                                                        |

Figure 1. MAX14611 EV Kit Schematic

<!-- image -->

Evaluates: MAX14611

Figure 2. MAX14611 EV Kit Component Placement Guide

<!-- image -->

Evaluates: MAX14611

Figure 3. MAX14611 EV Kit PCB Layout-Component Side

<!-- image -->

Evaluates: MAX14611

Figure 4. MAX14611 EV Kit PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX14611

Figure 5. MAX14611 EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX14611

Figure 6. MAX14611 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14611EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX14611

## MAX14611 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitr\	and	speci¿cations	without	notice	at	an\	time.

│

Evaluates: MAX14611