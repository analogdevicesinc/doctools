<!-- lastmod 2022-08-02 -->
## EV Kit General Description

The MAX739 evaluation kit (EV kit) permits evaluation of Maxim's current-mode, pulse-width modulating (PwM), inverting DC-DC converters. This EV kit has an easy-toassemble DiP layout.

The EV kit contains a printed circuit board and all components needed to evaluate an application circuit. The PCboard iscommonto theMAX736/MAX737/MAX739/ MAX759.TheMAX736/MAX737/MAX739havefixed outputs of -12V, -15V, and -5V, respectively. The MAX759 is adjustable from 0V to -15V. Output voltagesbeyond-15Vrequirea transformer.

When assembled, the EV kit is a working, inverting DCDC converter with the following characteristics:

In Bootstrapped Mode

(DRV-=-5.6Vfor theMAX736/MAX737)

(DRV- = VoUT for MAX739/MAX759)

| IC     | Input Voltage (M)   | Input Voltage (M)   | ndino Voltage (v)   | Typical Output Current Capability (mA)   |
|--------|---------------------|---------------------|---------------------|------------------------------------------|
|        | Min                 | Max                 |                     | VIN = 5.0V                               |
| MAX736 | 4                   | 8.6                 | -12                 | 140                                      |
| MAX737 | 4                   | 5.5                 | -15                 | 110                                      |
| MAX739 | 4                   | 11.0                | -5                  | 300                                      |
| MAX759 | 4                   | 11.0                | Adj*                | 300                                      |

In Non-Bootstrapped Mode (DRV- = OV for all parts)

| IC     | Input Voltage (V)   | Input Voltage (V)   | Output Voltage (V)   | Typical Output Current Capability (mA) VIN = 5.0V   |
|--------|---------------------|---------------------|----------------------|-----------------------------------------------------|
|        | Min                 | Max                 | Output Voltage (V)   | Typical Output Current Capability (mA) VIN = 5.0V   |
| MAX736 | 4                   | 8.6                 | -12                  | 70                                                  |
| MAX737 | 4                   | 5.5                 | -15                  | 50                                                  |
| MAX739 | 4                   | 15.0                | -5                   | 250                                                 |
| MAX759 |                     |                     | Adj*                 |                                                     |

*Adjustable output.

MAXIM

Call toll free 1-800-998-8800 for free samples 0r literature.

## IMIXYM

## MAX739 Evaluation Kit

Features

- OutputVoltage:
- -15V (MAX737)
- -12V (MAX736)

-5V(MAX739)

Adjustable, 0V to -15V (MAX759)

- 80% Typical Efficiencies at Full Load
- ←Soft-Start Protection
- ← Inverts from a 4V Minimum input Voltage
- ← On-Chip Power MOSFET
- Shutdown Capability
- ←All Components and PC Board Included in Kit

## Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX739EVKIT-DIP | 0°℃to+70'℃    | Through-Hole |

The MAx739 EV kit can be used to evaluate the MAX736/MAx737/MAx759.To order a free sample of the appropriate part from Maxim, call toll free 1-800-998-8800,FAX408-737-7194,orreturnoneof the sample request cards found inside every Power-Supply Design Guide brochure.

| Part No.   | Description                                   |
|------------|-----------------------------------------------|
| MAX736CPD  | -12VInvertingCurrent-ModePWMRegulator         |
| MAX737CPD  | -15VInvertingCurrent-ModePWMRegulator         |
| MAX759CPD  | AdjustableInverting Current-ModePWM Regulator |

## Typical Operating Circuit

<!-- image -->

## MAX739 Evaluation Kit

## Component List

| DESIGNATION   |   QTY. | DESCRIPTION                         |
|---------------|--------|-------------------------------------|
| IC1           |      1 | MAX739CPD                           |
| None          |      1 | Printedcircuitboard                 |
| L1A           |      1 | 33uH inductor                       |
| L1B           |      1 | 10uHinductor                        |
| C1            |      1 | 1.0uFceramiccapacitor               |
| C2, C5        |      2 | 150uFlow-ESRelectrolytic capacitors |
| C3A           |      1 | 0.047uFceramiccapacitor             |
| C3B           |      1 | 22uFtantalumcapacitor               |
| C4            |      1 | 0.1μFceramiccapacitor               |
| D1            |      1 | 1N5818Schottkydiode                 |
| D2            |      1 | 1N46905.6Vzenerdiode                |
| R1,R2         |      2 | 10kQ5%resistors                     |

Table 1. Operating Modes

| MODE                                                          | VOLTAGE REQUIREMENTS                 | REQUIRED CONNECTIONS                                                  |
|---------------------------------------------------------------|--------------------------------------|-----------------------------------------------------------------------|
| Non-Bootstrapped Mode(DRV- connected to GND,                  | VIN<15V, ViN -VouT< 21V              | Connectwire jumper across J3                                          |
| BootstrappedMode (DRV-connected to VOUT,MAX739/ MAX759only)   | VIn < 11V, Vin - Vout < 17V          | Connect wire jumper across J1                                         |
| (DRV-clamped to BootstrappedMode -5.6V,MAX736/ MAX737/MAX759) | VIN< 11V, VIN-VoUT<21V, VIN-DRV-<17V | Connect wire J2.Solder R2 jumperacross and D2 in the places provided. |

## Table 2. EV Kit Component Selection

| MAX739/MAX759   | MAX739/MAX759   |
|-----------------|-----------------|
| COMPONENT       | VALUE           |
| C3A(VIN>11V)    | 0.047μF         |
| C3B (VIN <11V)  | 22μF            |
| L1A             | 33μH            |
| L1B             | 10μH            |

| MAX736/MAX737   | MAX736/MAX737   |
|-----------------|-----------------|
| COMPONENT       | VALUE           |
| C3B             | 22μF            |
| L1B             | 10uH            |

Note:WhenevaluatingtheMAX739orMAX759,eitherinductor canbeused.Usethe33uHinductortomaximize availableoutputpower.WhenevaluatingtheMAX736or MAX737,useonlythe10uHinductor.SeetheComponent SelectionGuidesectioninthedatasheetforadditional componentinformation.

2

## EV Kit Assembly

Thekitmaybeassembledforoperationinbootstrapped or non-bootstrapped mode. Bootstrapping provides increasedswitch-gatedrive,whichallowshigheroutput currents.SeetheTypical OperatingCharacteristicssectionoftheMAX736/MAX737/MAX739/MAX759datasheet.

When operating the device in the bootstrapped or nonlimits.SeetheAbsoluteMaximumRatingstableinthe MAX736/MAX737/MAX739/MAX759datasheet.

Inbootstrappedmode,azenerdiodecanbeused to clamp theDRV-pinto anacceptablelevel.Forexample, whenusing theMAX736(-12Voutput)witha9Vinput voltage,DRV-cannotbeconnected toVouTbecause VIN-DRV-is greater than 17V.Use the 1N4690zener diode provided with the kit to clamp the DRV-voltage to -5.6Vsothat theVIN-DRV-voltagedifferentialfallswithin the permissible range.

RefertotheOperatingModestable(Table1)and theEV Kit Component Selection table (Table 2) to assemble the EV kit.

## Assembly List

C1..

. .1.OμF monolithic capacitor

C2..

...150uFelectrolytic capacitor

C3A ..0.047μF monolithic capacitor (see Table 2)

C3B .22uF tantalum capacitor(seeTable 2)

C4.. ...0.1μF monolithic capacitor

L1A

C5.

..150uFelectrolyticcapacitor

.33μHinductor(seeTable 2)

L1B ....10μH inductor (see Table 2)

..1N5818 Schottky diode

R1.

..10kΩ 5% resistor

InstallR2andD2onlyiftheevaluationboardistobe used in bootstrapped mode with DRV- clamped to -5.6V.

R2.．...10kΩ5%resistor

D2...

.1N46905.6Vzener diode

Jumper . .The jumper must be installed across J1,

.J2 orJ3forproperoperation(seeTable 1).

J1

. Bootstrapped to VouT

J2

.Bootstrapped to D2

.(requires R2 and D2)

J3 . Non-bootstrapped mode.

- ：.Use non-bootstrapped mode for .widestoperatingvoltagerange.

For the MAX759, R3 and R4 are selected by the user.

## Operating Principle

TheMAX736/MAX737/MAX739/MAX759invertingswitching regulators use a current-modepulse-width modulation (PWM) controller to convert an unregulated DC voltage (≥4V)to anegative output voltage.PWM controllers provide precise output regulation, low subharmonic noise, cycleby-cycle current limiting,overcurrent limiting,and programmable soft-start protection. Typical full-load efficiencies are 83%, and no-load supply current is typically 1.7mA.

## Assembly Instructions

## CAUTloN:Observe the following safety measures.

- ·Do not solder orwork on the circuit while power is applied.
- Do not apply power until all components are installed.
- ·Never apply more than the maximum supply voltage to VIn.
1. Long-nose pliers

The EV kits are shipped unassembled. You will need the following assembly tools:

2. Wire cutters
4. Hook-up wire (#18-22AWG) for the input and output connections.
3. 3ow soldering iron and rosin-core soider

Install the components as shown in Figure 2 and solder theminplace.Observepolarityonthecapacitors,diode, and IC. Keep all leads short. Inspect the completed board for cleanliness, shorts,and solder splashes.

## Operation

## Continuous-/Discontinuous-Conduction Modes

The input voltage, output voltage, load current, and inductorvaluedeterminewhether theICoperatesin continuous or discontinuous mode.Operating in continuousmodemaximizesavailable output power.As the increases,theEVkittendstooperateindiscontinuous mode.RefertotheMAX736/MAX737/MAX739/MAX759 data sheet for more detailed information.

## Bootstrapped/Non-Bootstrapped Modes

The voltage at DRV- determines the amount of gate drive applied to the intemal power MOSFET. The more negative the voltage at DRV-, the higher the gate drive, which translates into more available output power. A jumper is provided so the DRV-pin can be connected to GND (J3) orVoUT(J1)whenusingtheMAX739/MAX759,andGND (J3) or an intermediate voltage of -5.6V (J2) set by the 1N4690zenerdiodefortheMAX736/MAX737/MAX759. RefertotheMAX736/MAX737/MAX739/MAX759data sheetforadditionalinformation.Donotexceedthe in the Absolute Maximum Ratings.

<!-- image -->

## MAX739 Evaluation Kit

## Shutdown Contro!

A 10kQ resistor is provided between V+ and SHDN to simplify entering and exiting shutdown.Fornormal operation, SHDN (a high-impedance input) is pulled up through the 10kQ resistor. To enter shutdown mode, SHDN must be pulled to GND. NOTE: In shutdown mode, the actual shutdown current measured will exceed the specified limit due to the current through the 10kQ resistor. To measurethetrueshutdowncurrent,liftonesideof the SHDN 10kQ pull-up resistor and tie SHDN to GND.

## MAX759 Adjustable Output

The EV kit output voltage is set by resistors R3 and R4, whichformavoltagedividerbetweentheoutputandthe error-amplifier input (CC)pin. The voltage at the junction of R3 and R4 is 0.0v. Since CC is a high-impedance CMOSinput,it willnot significantlyload the voltage divider. To set the output voltage, let R4 be any value between 5kΩ2 and 15kQ. R3 is given by the formula:

## R3 = (-VOUT)(R4) / 1.23V

WARNiNG: When adjusting the output voltage, do not exceed the maximum differential input/output voltage stated in the Absolute Maximum Ratings.

## Testing

Test the assembled EV kit with an adjustable bench power supply as a source. Under no-load conditions, apply power to the EV kit by first setting the bench supply output voltage tooV and then slowly increasing the bench supply voltage. Be sure V+ falls within the stated powersupply limits.

Beforeconnecting the EVkit tothe actual circuit that the EVkitwillenergize,usearesistiveloadtoverifyoperation. ThisminimizesthechanceofdamagingEVkitcomponents and the circuit to which it will provide power.

The bench supply should have a 1A to 3A capability and itscurrentlimitingshouldbesettopreventinteraction with the EV kit's peak currents.

## Trouble-Shooting

The following chart is a trouble-shooting guide for a malfunctioning board.

| Outputvoltagenegative and not regulated   | 1.Load current is toohigh 2. Outputfiltercapactitor insertedbackwards                                                                  |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Output voltage positive andnotregulated   | 1.1N5818Schottkydiode insertedbackwards                                                                                                |
| No output voltage                         | 1. DRV- pin floating. Tie DRV- to GND, VoUT or an intermedi- ate voltage. 2.V+ less than 4V. 3.V+supplyfilter capacitor not connected. |

## MAX739 Evaluation Kit

| Terminal Name   | Function                                                                                                                           |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
| +^              | PositiveSupplyVoltageInput.Donotexceed the maximumalliowableinput/outputdifferentialvolt- agespecifiedintheAbsoluteMaximumRatings. |
| VOUT            | NegativeOutputVoltage                                                                                                              |
| GND             | Ground                                                                                                                             |
| SHDN            | ShutdownControlpulleduptoV+fornormal operation.Tie toGNDforshutdown.SeeShut- downControlsection.                                   |

<!-- image -->