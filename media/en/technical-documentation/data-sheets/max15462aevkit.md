<!-- lastmod 2022-08-02 -->
## MAX15462A Evaluation Kit

## General Description

The MAX15462A evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  demonstrates  the  performance of the MAX15462A 42V, 300mA ultra-small, highefficiency, synchronous step-down converter. The EV kit operates  over  a  wide  4.5V  to  42V  input  voltage  range, and  provides  up  to  300mA  at  the  preset  3.3V  output. The  device  features  undervoltage-lockout,  overcurrent protection,  and  thermal  shutdown.  The  EV  kit  switches at  a  fixed  frequency  of  500kHz,  and  delivers  a  peak efficiency of 90% with the supplied components.

The  EV  kit  comes  installed  with  the  MAX15462AATA+ in an 8-pin (2mm x 2mm) lead(Pb)-free/RoHS-compliant TDFN package.

## Features

- 4.5V to 42V Input Voltage Range
- 3.3V Output, 300mA Continuous Current
- Internal Compensation
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- 90% Peak Efficiency
- 500kHz Fixed-Frequency PWM Operation
- PFM or Forced-PWM Mode of Operation
- Hiccup Mode Overcurrent Protection
- Open-Drain RESET Output
- Thermal Shutdown
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX15462A

## Quick Start

## Recommended Equipment

- MAX15462A EV kit
- 42V adjustable, 0.5A DC power supply
- Electronic load up to 300mA
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed on jumpers JU1 and JU2 (EN/UVLO).
- 2) Verify that jumper JU3 (MODE PFM operation) is open.
- 3) Set the electronic load to constant-current mode, 300mA, and disable the electronic load.
- 4) Connect the electronic load's positive terminal to the VOUT PCB pad. Connect the negative terminal to the GND PCB pad.
- 5) Connect the voltmeter across the VOUT and GND PCB pads.
- 6) Set the power-supply output to 24V. Disable the power supply.
- 7) Connect the 24V power-supply output to the VIN PCB pad. Connect the supply ground to the GND PCB pad.
- 8) Turn on the power supply and verify that VOUT is at 3.3V with respect to GND.
- 9) Enable the electronic load and verify that VOUT is at 3.3V with respect to GND.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX15462A Evaluation Kit

## Detailed Description

The MAX15462A  EV kit is a fully assembled and tested  circuit  board  that  demonstrates  the  performance  of the  MAX15462A  42V,  300mA  ultra-small,  high-efficiency, synchronous step-down converter. The EV kit operates  over  a  wide  4.5V  to  42V  input  voltage  range, and  provides  up  to  300mA  at  the  preset  3.3V  output. The  device  features  undervoltage  lockout,  overcurrent protection,  and  thermal  shutdown.  The  EV  kit  switches at  a  fixed  frequency  of  500kHz,  and  delivers  a  peak efficiency of 90% with the supplied components.

The EV kit includes an EN/UVLO PCB pad and jumpers JU1 and JU2 to enable control of the converter output. The MODE PCB pad and jumper JU3 are provided for selecting  the  mode  of  operation  of  the  converter.  The VCC PCB pad helps measure the internal LDO voltage. An additional RESET PCB pad is available for monitoring the open-drain logic output.

## Enable Control (JU1, JU2)

The  EN/UVLO  pin  of  the  device  serves  as  an  on/off control while also allowing the user to program the input

Table 1. Enable Control (EN/UVLO)

| SHUNT POSITION   | SHUNT POSITION   | EN/UVLO PIN                                          | VOUT OUTPUT           |
|------------------|------------------|------------------------------------------------------|-----------------------|
| JU1              | JU2              | EN/UVLO PIN                                          | VOUT OUTPUT           |
| 1-2              | Open             | Connected to VIN                                     | Enabled               |
| Open             | 1-2              | Connected to GND                                     | Disabled              |
| 1-2*             | 1-2*             | Connected to midpoint of the R1, R2 resistor-divider | Enabled at VIN ≥ 4.5V |

* Default position.

## Table 2. Mode Control (JU3)

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

## Evaluates: MAX15462A

undervoltage-lockout  (UVLO)  threshold.  Jumpers  JU1 and JU2 configure the EV kit's output for turn-on/turn-off control. Install a shunt across pins 1-2 on jumper JU2 to disable VOUT. See Table 1 for proper jumper settings.

Additionally, resistors R1 and R2 are included to set the UVLO to a desired turn-on voltage. Refer to the Enable Input (EN/UVLO), Soft-Start section in the MAX15462A/ MAX15462B IC data sheet for additional information on setting the UVLO threshold voltage.

## Active-Low Open-Drain Reset Output ( RESET )

The  EV  kit  provides  a  PCB  pad  to  monitor  the  status of  the RESET output. RESET goes  high  when  V OUT rises  above  95%  (typ)  of  its  nominal  regulated  output voltage. When V OUT  falls below 92% (typ) of its nominal regulated voltage, RESET is pulled low.

## PFM or Forced-PWM Mode (MODE)

The EV kit includes a jumper (JU3) to program the mode of operation of the converter. Install a shunt across JU3 before powering up the EV kit to enable the forced-PWM operation. Keep JU3 open to enable the light-load PFM operation. See Table 2 for proper JU3 configuration.

│

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

LOAD TRANSIENT RESPONSEPWM MODE (LOAD CURRENT STEPPED FROM NO LOAD TO 150mA)

<!-- image -->

<!-- image -->

<!-- image -->

│

Figure 1. MAX15462A EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX15462A

Figure 2. MAX15462A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 3. MAX15462A EV Kit PCB Layout-Solder Side

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note:

Indicate that you are using the MAX15462A when contacting these component suppliers.

## Component Information and Schematic

See  the  following  links  for  component  information  and schematic:

- MAX15462A EV BOM
- MAX15462A EV Schematic

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15462AEVKIT# | EVKIT  |

#Denotes RoHS compliant.

Evaluates: MAX15462A

│

## MAX15462A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSlLed. 0a[LP InteJUated UeVeUYeV tKe ULJKt tR FKanJe tKe FLUFXLtU\ and VSeFL¿FatLRnV ZLtKRXt nRtLFe at an\ tLP

│

Evaluates: MAX15462A

<!-- image -->

<!-- image -->

| BILL OF MATERIALS (BOM) Revision 3/15   | BILL OF MATERIALS (BOM) Revision 3/15                                                    | BILL OF MATERIALS (BOM) Revision 3/15   | BILL OF MATERIALS (BOM) Revision 3/15   | BILL OF MATERIALS (BOM) Revision 3/15   |
|-----------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| Serial No.                              | Description                                                                              | Quantity                                | Designator                              | Part Number                             |
| 1                                       | 22µF, 50V Electrolytic capacitors (6.6mm x 6.6mm case size)                              | 1                                       | C1                                      | PANASONIC EEEFK1H220P                   |
| 2                                       | CAP,1µF,10%,50V,X7R,1206                                                                 | 1                                       | C2                                      | MURATA GRM31MR71H105K                   |
| 3                                       | CAP,1µF,10%,6.3V,X7R,0603                                                                | 1                                       | C3                                      | MURATA GRM188R70J105K                   |
| 4                                       | CAP,10µF,10%,6.3V,X7R,1206                                                               | 1                                       | C4                                      | MURATA GRM31CR70J106K                   |
| 5                                       | INDUCTOR,33µH,640mA                                                                      | 1                                       | L1                                      | COILCRAFT LPS4018-333ML                 |
| 6                                       | RES,2.2M Ω ,1%,0402                                                                      | 1                                       | R1                                      |                                         |
| 7                                       | RES,806K Ω ,1%,0402                                                                      | 1                                       | R2                                      |                                         |
| 8                                       | RES,100K Ω ,1%,0402                                                                      | 1                                       | R3                                      |                                         |
| 9                                       | 42V, 300mA, High Efficiency, Integrated MOSFET, Synchronous Step-Down Regulator (8 TDFN) | 1                                       | U1                                      | MAXIM MAX15462AATA+                     |
| 10                                      | 2 Pin Headers(0.1in centers)                                                             | 3                                       | JU1, JU2, JU3                           | SAMTEC TSW-102-07-T-S                   |
| 11                                      | SHORTING JUMPER, 2 POSITION, 0.1 CENTER                                                  | 3                                       | SU1-SU3                                 | Sullins STC02SYAN                       |
| Jumper Table                            | Jumper Table                                                                             | Jumper Table                            |                                         |                                         |
|                                         | JUMPER                                                                                   | SHUNT POSITION                          |                                         |                                         |
|                                         | JU1                                                                                      | 1,2 SHORT                               |                                         |                                         |
|                                         | JU2                                                                                      | 1,2 SHORT                               |                                         |                                         |
|                                         | JU3                                                                                      | OPEN                                    |                                         |                                         |