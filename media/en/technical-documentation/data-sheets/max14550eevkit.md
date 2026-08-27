<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX14550E Evaluation Kit

## General Description

Features

The MAX14550E evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14550E  USB  host  charger identification analog switch. The Hi-Speed USB transmission lines (D+ and D-) have 90 I differential impedance traces  to  meet  Hi-Speed  USB  specs.  The  MAX14550E EV kit comes with a MAX14550EETB+ installed.

- S Hi-Speed USB (480Mbps)
- S 90 I Differential Traces for USB 2.0
- S USB Powered
- S Test Points for Easy Evaluation
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14550EEVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                                            |
|--------------------|-------|------------------------------------------------------------------------|
| C1, C3, C4, C6-C9  |     7 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C2, C5, C10        |     3 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M |
| D1, D2             |     2 | Green LEDs (0603)                                                      |
| JU1, JU2, JU5, JU6 |     4 | 3-pin headers                                                          |
| JU3, JU4           |     2 | 2-pin headers                                                          |
| JU7                |     0 | Not installed, 2-pin header                                            |
| P1                 |     1 | USB type-A, right-angle PC-mount receptacle                            |
| P2                 |     1 | USB type-B, right-angle PC-mount receptacle                            |
| R1, R2             |     0 | Not installed, resistors (0603)                                        |
| R3                 |     1 | 75k I Q 1% resistor (0603)                                             |

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| R4, R6        |     2 | 49.9k I Q 1% resistors (0603)                             |
| R5            |     1 | 43.2k I Q 1% resistor (0603)                              |
| R7, R8        |     2 | 0 I Q 5% resistors (0603)                                 |
| R9, R10       |     2 | 470 I Q 5% resistors (0603)                               |
| TP1, TP3, TP5 |     3 | Red multipurpose test points                              |
| TP2, TP4, TP6 |     3 | Black multipurpose test points                            |
| TP7, TP8, TP9 |     0 | Not installed, miniature test points                      |
| U1            |     1 | Host USB charger switch (10 TDFN-EP*) Maxim MAX14550EETB+ |
| -             |     1 | USB high-speed A-to-B cables, 5ft                         |
| -             |     1 | USB A-to-micro-B cable, 1m                                |
| -             |     6 | Shunts                                                    |
| -             |     1 | PCB: MAX14550E EVALUATION KIT+                            |

## Component Supplier

| SUPPLIER                         | PHONE        | WEBSITE                     |
|----------------------------------|--------------|-----------------------------|
| Murata Electronics North America | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14550E when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX14550E Evaluation Kit

## Quick Start

## Required Equipment

## Procedure

The  MAX14550E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)    Verify that all jumpers (JU1-JU6) are in their default positions, as shown in Table 1.
- 2)    Connect the positive terminal of the 5V supply to TP1 (+5V)  and  the  GND  terminal  to  TP2  (GND).  Do  not apply power between TP1 and TP2 if a USB type-B cable is plugged into P2 coming from the PC.
- 3)    Set the DMM as an ohmmeter and verify that the connection between DP (JU7, D+) and TDP (TP7) is less than 10 I .  Repeat for DM (JU7, D-) and TDM (TP8). The  default  condition  for  the  MAX14550E  is  CB0  = CB1 = 1 (USB traffic active).
- 4)    Set  the  shunt  on  JU5  to  the  2-3  position  (CB0  =  0, CB1 =1).
- 5)    Under this setting, DP and DM are shorted to each other.  Measure  the  resistance  across  JU7.  A  resistance less than 100 I represents a short between DP and DM.
- 6)    Set the shunt on JU5 to the 1-2 position and set the shunt on JU6 to the 2-3 position (CB0 = 1, CB1 = 0).
- 7)    Under this setting, RDP is shorted to DP and RDM is shorted to DM (JU3 should be open by default). DP and  DM  are  connected  to  external  resistor-dividers through RDP and RDM, respectively. Verify that the voltage between RDP and DP is the same. Also verify that the voltage between RDM and DM is the same.
- 8)    Change  the  shunt  on  JU3  to  the  closed  position. Shorting  RDP  to  GND  causes  the  MAX14550E  to connect DP and DM to the internal resistor-dividers. The voltage on DP and DM is similar to the voltage on  RDP  and  RDM  when  JU3  is  open,  because  the external resistor-dividers are closely matched to the internal voltage-dividers.

## Table 1. MAX14550E EV Kit Jumper Description (JU1-JU6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                    |
|----------|------------------|----------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects VCC to +5V from VBUS on P2. When the USB cable is plugged into the PC, VBUS volt- age appears on TP1. |
| JU1      | 2-3              | Connects VCC to TP3 (EXTVCC). Apply an external 5V supply between TP3 and TP4.                                 |
| JU2      | 1-2*             | Selects VCC as charging source for P1                                                                          |
| JU2      | 2-3              | Selects TP5 (EXTCHG) as the charging source for P1. Apply the external 5V supply between TP5 and TP6.          |
| JU3      | Open*            | External voltage-divider is used                                                                               |
| JU3      | Closed           | Internal voltage-divider is used                                                                               |
| JU4      | Open             | RDM test point                                                                                                 |
| JU4      | Closed*          | Normal operation                                                                                               |
| JU5      | 1-2*             | CB0 is connected to VCC (CB0 = 1)                                                                              |
| JU5      | 2-3              | CB0 is connected to GND (CB0 = 0)                                                                              |
| JU6      | 1-2*             | CB1 is connected to VCC (CB1 = 1)                                                                              |
| JU6      | 2-3              | CB1 is connected to GND (CB1 = 0)                                                                              |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

-  MAX14550E EV kit
-  5V, 10mA power supply
-  Digital multimeter (DMM)

<!-- image -->

## MAX14550E Evaluation Kit

## Detailed Description of Hardware

The  MAX14550E  EV  kit  provides  a  proven  layout  to evaluate the MAX14550E USB host charger identification analog switch. The D+ and D- lines have 90 I differential impedance  to  meet  USB  2.0  signal-integrity  specifications. The MAX14550E is powered by VBUS by default. Jumpers and shunts are on the EV kit to separate VBUS from VCC and the charger voltage. VBUS can be limited to 100mA or 500mA due to USB current-limit specs, but when the host acts as a stand-alone charger, the charging current can be much greater. Change the shunt on JU1  to  the  2-3  position  to  power  VCC  externally  from a  5V  regulated  supply.  VCC  is  by  default  the  charger voltage.  The  charger  voltage  can  be  isolated  from VCC by changing the shunt on JU2 to the 2-3 position. Green LEDs on the EV kit indicate power at each USB connector.

## Table 2. Digital Inputs States

|   CB0 |   CB1 | DP/DM                           | COMMENT            | INTERNAL RESISTOR-DIVIDER STATE IF NO EXTERNAL DIVIDER IS PRESENT   |
|-------|-------|---------------------------------|--------------------|---------------------------------------------------------------------|
|     0 |     0 | Autodetection circuit active    | -                  | Connected                                                           |
|     0 |     1 | Shorted together                | Auto mode disabled | Not connected                                                       |
|     1 |     0 | Connected to resistor- dividers | Auto mode disabled | Connected                                                           |
|     1 |     1 | Connected to TDP/TDM            | USB traffic active | Not connected                                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## Control Settings for CB0 and CB1 (JU5, JU6)

JU5 and JU6 correspond to CB0 and CB1, respectively. Table  2  shows  the  different  MAX14550E  states.  The external  resistor-divider  on  RDP/RDM  is  connected  to DP/DM if JU3 is open. When JU3 is closed, DP and DM are connected to the internal resistor-divider.

## Autodetection

Autodetection  chooses  between  the  charger  detection states. The first state causes D+ and D- to be shorted to each other (CB0 = 0, CB1 = 1). The second state causes D+  and  D-  to  be  connected  to  an  internal  or  external resistor-divider  from  VBUS  (CB0  =  1,  CB1  =  0).  Autodetection chooses one of these two states depending on the voltage on DM.

## MAX14550E Evaluation Kit

Figure 1. MAX14550E EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX14550E Evaluation Kit

Figure 2. MAX14550E EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX14550E EV Kit PCB Layout-Component Side

Figure 4. MAX14550E EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX14550E Evaluation Kit

Figure 5. MAX14550E EV Kit PCB Layout-VCC Layer 3

<!-- image -->

Figure 6. MAX14550E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6