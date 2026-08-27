<!-- lastmod 2022-08-02 -->
## General Description

The MAX9392 evaluation kit (EV kit) is a fully assembled and tested PCB that simplifies the evaluation of the MAX9392 1.5GHz, dual 2 x 2 crosspoint switch. The EV kit  accepts low-voltage differential signals (LVDS) or high-speed transistor logic (HSTL) input signals and converts the signals to LVDS outputs for each channel.

The MAX9392 EV kit is designed with 100 Ω differential controlled impedance in a four-layer PCB. The board is designed for direct differential probing of the LVDS inputs/outputs. The EV kit operates from a single 3.3V supply. The MAX9392 EV kit can also be used to evaluate the MAX9393, which accepts LVPECL and CML input signals.

| DESIGNATION                                                                                              |   QTY | DESCRIPTION                                                          |
|----------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------|
| C1                                                                                                       |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K   |
| C2                                                                                                       |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J105K    |
| C3, C5, C8, C10-C18, C20-C35                                                                             |    28 | 0.1µF ±10%, 16V X5R ceramic capacitors (0603) Murata GRM188R61C104K  |
| C4, C6, C7, C9                                                                                           |     4 | 0.01µF ±10%, 50V X5R ceramic capacitors (0603) Murata GRM188R61H103K |
| C19                                                                                                      |     0 | Not installed, ceramic capacitor (0805)                              |
| INA0, INA0 , INA1 INA1 , INB0, INB0 INB1, INB1 , OUTA0 OUTA0 , OUTA1 OUTA1 , OUTB0, OUTB0 , OUTB1, OUTB1 |    16 | SMA connectors (edge mounted)                                        |

<!-- image -->

Features

- ♦ Single 3V to 3.6V Supply Operation
- ♦ 1.5GHz Operation
- ♦ 100 Ω Controlled-Differential Signal Traces
- ♦ Supports Testing with Various Mediums Differential Probes Twisted-Pair Wire Coax Cables with SMA Connectors
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9392EVKIT+ | EV Kit |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                              |
|----------------|-------|----------------------------------------------------------|
| J1-J8, JU1-JU9 |    17 | 2-pin headers                                            |
| R1             |     0 | Not installed, resistor (1206)                           |
| R2             |     0 | Not installed, potentiometer Bourne 3361P-1-101GLF       |
| R3-R10         |     8 | 49.9 Ω ±1% resistors (0603)                              |
| R11-R26        |     0 | Not installed, resistors (0603)                          |
| U1             |     1 | Dual 2 x 2 crosspoint switch (32 TQFP) Maxim MAX9392EHJ+ |
| -              |     9 | Shunts (JU1-JU9)                                         |
| -              |     1 | PCB: MAX9392 Evaluation Kit+                             |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9392 or MAX9393 when contacting this component supplier.

## MAX9392 Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- 3V to 3.6V, 500mA power supply (VCC)
- LVDS signal generator (e.g., HP 8133A)
- Digital  sampling oscilloscope or communication analyzer (e.g., CSA8000)

## Procedure

The MAX9392 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the power supply to the VCC PCB pad. Connect the ground terminal of the power supply to GND PCB pad.
- 2) Set the signal generators to provide an LVDS signal (this requires both a noninverting and inverting signal output from the signal generator).
- 3) Verify  that  a  shunt  is  not  installed  at  jumper  JU1 (MAX9392 evaluation).
- 4) Verify that shunts are installed at jumpers JU2, JU3, JU6, and JU7 (all outputs enabled).
- 5) Verify  that  a  shunt  is  not  installed  across  jumper JU4 and a shunt is installed across jumper JU5 (channel A configured in dual repeater mode).
- 6) Verify  that  a  shunt  is  not  installed  across  jumper JU8 and a shunt is installed across jumper JU9 (channel B configured in dual repeater mode).
- 7) Connect the signal generator's noninverting signals to the INA\_ and INB\_ SMA inputs.
- 8) Connect the signal generator's inverting signals to the INA\_ and INB\_ SMA inputs.
- 9) Connect all the OUT\_ SMA output connectors to the digital  oscilloscope inputs using 50 Ω impedance cables.
- 10) Enable the signal generators' outputs.
- 11) Verify the signals by observing oscilloscope channels.

## Detailed Description of Hardware

The MAX9392 EV kit is a fully assembled and tested PCB that simplifies the evaluation of the MAX9392 1.5GHz, dual 2 x 2 crosspoint switch. The EV kit accepts LVDS and HSTL signals at each input and converts the signals to LVDS output for each channel. The MAX9392 EV kit is designed with 100 Ω differential controlled impedance in a four-layer PCB. The board is designed for direct differential probing at the LVDS inputs/outputs and single-ended probing at the outputs using the respective 2-pin headers. The EV kit operates from a single 3.3V supply that provides 150mA of output current.

The MAX9392 EV kit consists of two independent LVDS channels (A and B) that can be configured to operate in one of three modes (crosspoint switch, 1:2 splitter, or dual repeaters), using on-board jumpers. All differential receiver inputs (IN\_) are terminated with two seriesconnected 49.9 Ω resistors.  Resistor  PCB  pads R11-R18 are provided at the EV kit output channels for application-dependent termination.

## Power Supply

The MAX9392 EV kit can utilize up to three power supplies. VCC is used as the power source for the MAX9392 and the logic inputs.  VTERM\_IN  and VTERM\_OUT PCB pads are used for input- and outputtermination voltages when evaluating the MAX9393. VTERM\_IN has a 0 to VCC - 1.2V input supply voltage range. VTERM\_OUT should be set to the respective LVDS common-mode or bias voltage.

## Input Signals

The MAX9392 accepts LVDS or HSTL differential input signals. The differential high threshold is +100mV and the differential low threshold is -100mV. The SMA input connectors for the circuit are labeled INA\_, INB\_ (noninverting) and INA\_ , INB\_ (inverting).  All  differential inputs are terminated with two 49.9 Ω resistors (R3-R10) to create a 100 Ω impedance termination. The input signals can be monitored with a differential signal probe placed across header pins J1-J4 for the desired signal.

## Output Signals

The four differential outputs can be accessed at header pins J5-J8 with shielded twisted-pair cables or differential probes. Pin 1 is the inverting signal ( OUT\_ )  and Pin 2 is the noninverting signal (OUT\_). When testing the EV kit using differential probes or twisted pairs, populate resistor PCB pads R11-R18 with 49.9 Ω (0603) surface-mount resistors. In addition to populating  resistors  R11-R18, terminate the twisted-wire pair with a 100 Ω resistor at the far end of the wire. All differential output pairs are laid out with equal trace length having a maximum length difference of 10 mils and 100 Ω controlled differential-impedance traces.

Leave coupling capacitors C11-C18 in series with the outputs (OUT\_, OUT\_ ) and resistor PCB pads R11-R18 unpopulated when interfacing the output SMA OUT\_ connectors to 50 Ω impedance oscilloscope inputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Output Enable/Disable (JU2, JU3, JU6, JU7)

Jumpers JU2, JU3, JU6, and JU7 enable and disable the EV kit's corresponding outputs. Remove the shunts from the jumpers to disable the output pairs. The differential output pairs assert to a differential low condition when disabled. Install a shunt across the jumpers to enable the outputs. The outputs can also be enabled or disabled by applying a logic signal at pin 1 of jumpers JU2, JU3, JU6, and JU7. See Table 1 for proper jumper settings  for  enabling  and  disabling  the  corresponding outputs. Refer to the MAX9392 IC data sheet for proper high and low logic levels at the enable inputs.

Table 1. Enabled/Disable Control (JU2, JU3, JU6, JU7)

| JUMPER   | SHUNT POSITION   | OUTPUT STATUS         |
|----------|------------------|-----------------------|
| JU2      | Not installed    | OUTA1, OUTA1 disabled |
| JU2      | Installed        | OUTA1, OUTA1 enabled  |
| JU3      | Not installed    | OUTA0, OUTA0 disabled |
| JU3      | Installed        | OUTA0, OUTA0 enabled  |
| JU6      | Not installed    | OUTB1, OUTB1 disabled |
| JU6      | Installed        | OUTB1, OUTB1 enabled  |
| JU7      | Not installed    | OUTB0, OUTB0 disabled |
| JU7      | Installed        | OUTB0, OUTB0 enabled  |

Table 2. Channel A Output Routing Configuration (JU4, JU5)

| SHUNT POSITION   | SHUNT POSITION   | SWITCH CONFIGURATION   |               | OUTPUT SIGNALS              |
|------------------|------------------|------------------------|---------------|-----------------------------|
| JU4              | JU5              |                        | INPUT SIGNALS |                             |
| Not installed    | Not installed    | 1:2 splitter           | INA0/ INA0    | OUTA0/ OUTA0 , OUTA1/ OUTA1 |
| Not installed    | Installed        | Dual repeaters         | INA0/ INA0    | OUTA0/ OUTA0                |
| Not installed    | Installed        | Dual repeaters         | INA1/ INA1    | OUTA1/ OUTA1                |
| Installed        | Not installed    | 2 x 2 switch           | INA0/ INA0    | OUTA1/ OUTA1                |
| Installed        | Not installed    | 2 x 2 switch           | INA1/ INA1    | OUTA0/ OUTA0                |
| Installed        | Installed        | 1:2 splitter           | INA1/ INA1    | OUTA0/ OUTA0 , OUTA1/ OUTA1 |

Table 3. Channel B Output Routing Configuration (JU8, JU9)

| SHUNT POSITION   | SHUNT POSITION   | SWITCH CONFIGURATION   | INPUT SIGNALS   | OUTPUT SIGNALS              |
|------------------|------------------|------------------------|-----------------|-----------------------------|
| JU8              | JU9              |                        |                 |                             |
| Not installed    | Not installed    | 1:2 splitter           | INB0/ INB0      | OUTB0/ OUTB0 , OUTB1/ OUTB1 |
| Not installed    | Installed        | Dual repeaters         | INB0/ INB0      | OUTB0/ OUTB0                |
| Not installed    | Installed        | Dual repeaters         | INB1/ INB1      | OUTB1/ OUTB1                |
| Installed        | Not installed    | 2 x 2 switch           | INB0/ INB0      | OUTB1/ OUTB1                |
| Installed        | Not installed    | 2 x 2 switch           | INB1/ INB1      | OUTB0/ OUTB0                |
| Installed        | Installed        | 1:2 splitter           | INB1/ INB1      | OUTB0/ OUTB0 , OUTB1/ OUTB1 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9392 Evaluation Kit

## Switch Configuration (JU4, JU5, JU8, JU9)

Jumpers JU4 and JU5 control the signal routing for channel  A  differential  inputs  (INA0/ I NA0 and INA1/ INA1 ).  Jumpers JU8 and JU9 control the signal routing  for  channel  B  inputs  (INB0/ I NB0 and INB1/ INB1 ).  Channels A and B can be configured as a  2  x  2  crosspoint  switch,  1:2  splitter,  or  as  dual repeaters by configuring these jumpers. See Tables 2 and 3 for proper jumper settings for the different switch configuration.

## MAX9392 Evaluation Kit

## Evaluating the MAX9393

The MAX9392 EV kit can be used to evaluate the MAX9393 by replacing U1 with the MAX9393. Install a shunt across jumper JU1, a resistor at R1, and a potentiometer at R2, in addition to applying the desired termination voltage at the VTERM\_IN PCB pad to evaluate the MAX9393. Resistor R1 and potentiometer R2 are used to provide current sinking capability to the EV kit circuit  when evaluating LVPECL, CML, and other VCC referenced  differential  input  signals.  PCB  pad VERTM\_OUT can also be used to set the LVDS output termination voltages. See Table 4 for proper configuration of jumper JU1 when evaluating the MAX9393.

Table 4. Jumper JU1 Configuration

| SHUNT POSITION   | EVALUATES   |
|------------------|-------------|
| Not installed    | MAX9392     |
| Installed        | MAX9393     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9392 Evaluation Kit

Figure 1. MAX9392 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9392 Evaluation Kit

Figure 2. MAX9392 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9392 Evaluation Kit

<!-- image -->

Figure 3. MAX9392 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9392 Evaluation Kit

Figure 4. MAX9392 EV Kit PCB Layout-GND

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9392 Evaluation Kit

Figure 5. MAX9392 EV Kit PCB Layout-Power

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9392 Evaluation Kit

Figure 6. MAX9392 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9392 Evaluation Kit

Figure 7. MAX9392 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.